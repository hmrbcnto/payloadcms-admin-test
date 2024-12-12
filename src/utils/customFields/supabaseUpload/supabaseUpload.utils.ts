import { Field } from 'payload';

interface SupabaseUploadFieldConfig {
    name: string;
    required: boolean;
}

const supabaseUploadFieldValidation = (value?: string): boolean | string => {
    return true;
}

export const supabaseUploadFieldGenerator = (config: SupabaseUploadFieldConfig): Field => ({
    ...config,
    type: 'text',
    admin: {
        components: {
            Field: '/src/utils/customFields/supabaseUpload/field.server',
        }
    }
})
