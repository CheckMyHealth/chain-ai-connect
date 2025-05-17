
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';
import { projectService } from '@/services/projectService';
import { Label } from '@/components/ui/label';

const partnershipTypes = [
  { value: 'investment', label: 'Investment' },
  { value: 'technical', label: 'Technical Collaboration' },
  { value: 'marketing', label: 'Marketing Partnership' },
  { value: 'integration', label: 'Product Integration' },
  { value: 'research', label: 'Research & Development' },
];

const blockchains = [
  { value: 'ethereum', label: 'Ethereum' },
  { value: 'solana', label: 'Solana' },
  { value: 'polygon', label: 'Polygon' },
  { value: 'avalanche', label: 'Avalanche' },
  { value: 'binance', label: 'Binance Smart Chain' },
  { value: 'near', label: 'NEAR' },
  { value: 'optimism', label: 'Optimism' },
  { value: 'arbitrum', label: 'Arbitrum' },
  { value: 'other', label: 'Other' },
];

const formSchema = z.object({
  title: z.string().min(3, { message: 'Title must be at least 3 characters' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters' }),
  company: z.string().min(2, { message: 'Company name must be at least 2 characters' }),
  website: z.string().url({ message: 'Please enter a valid URL' }).optional().or(z.literal('')),
  blockchain: z.string({ required_error: 'Please select a blockchain' }),
  partnership_type: z.array(z.string()).min(1, { message: 'Select at least one partnership type' }),
  requirements: z.string().min(10, { message: 'Requirements must be at least 10 characters' }),
  benefits: z.string().min(10, { message: 'Benefits must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const ProjectForm = () => {
  const { user, isConfigured } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPartnershipTypes, setSelectedPartnershipTypes] = useState<string[]>([]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      company: '',
      website: '',
      blockchain: '',
      partnership_type: [],
      requirements: '',
      benefits: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    if (!user) {
      toast({
        title: 'Authentication required',
        description: 'Please sign in to submit a project',
        variant: 'destructive',
      });
      navigate('/login');
      return;
    }

    setIsSubmitting(true);
    try {
      const project = await projectService.createProject(data);
      
      toast({
        title: 'Project submitted',
        description: 'Your project has been submitted and will be analyzed for potential matches',
      });

      // Analyze project immediately
      try {
        await projectService.analyzeProject(project.id);
        toast({
          title: 'Project analyzed',
          description: 'Our AI agent has analyzed your project and found potential matches',
        });
      } catch (error) {
        console.error('Error analyzing project:', error);
        toast({
          title: 'Analysis pending',
          description: 'Your project will be analyzed soon',
          variant: 'default',
        });
      }

      navigate('/dashboard');
    } catch (error) {
      console.error('Error submitting project:', error);
      toast({
        title: 'Submission failed',
        description: 'There was an error submitting your project. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePartnershipTypeChange = (checked: boolean, value: string) => {
    setSelectedPartnershipTypes(prev => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter(type => type !== value);
      }
    });
    
    const currentValues = form.getValues('partnership_type');
    if (checked && !currentValues.includes(value)) {
      form.setValue('partnership_type', [...currentValues, value]);
    } else if (!checked && currentValues.includes(value)) {
      form.setValue('partnership_type', currentValues.filter(type => type !== value));
    }
  };

  if (!isConfigured) {
    return (
      <div className="text-center p-8 border rounded-lg bg-red-50">
        <h3 className="text-lg font-semibold text-red-700">Configuration Error</h3>
        <p className="mt-2">Supabase is not properly configured. Please set up your environment variables.</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter your project title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company/Team Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your company or team name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website (optional)</FormLabel>
              <FormControl>
                <Input placeholder="https://your-website.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Describe your project in detail" 
                  className="min-h-[120px]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="blockchain"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primary Blockchain</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a blockchain" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {blockchains.map((blockchain) => (
                    <SelectItem key={blockchain.value} value={blockchain.value}>
                      {blockchain.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="partnership_type"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel>Partnership Types</FormLabel>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {partnershipTypes.map((type) => (
                  <div key={type.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={`partnership-${type.value}`}
                      checked={form.getValues('partnership_type').includes(type.value)}
                      onCheckedChange={(checked) => handlePartnershipTypeChange(!!checked, type.value)}
                    />
                    <Label htmlFor={`partnership-${type.value}`}>{type.label}</Label>
                  </div>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="requirements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Partnership Requirements</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="What do you require from your partners?" 
                  className="min-h-[120px]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="benefits"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Partnership Benefits</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="What benefits do partners receive?" 
                  className="min-h-[120px]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-blockchain-500 hover:bg-blockchain-600"
          disabled={isSubmitting}
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Submit Project
        </Button>
      </form>
    </Form>
  );
};

export default ProjectForm;
