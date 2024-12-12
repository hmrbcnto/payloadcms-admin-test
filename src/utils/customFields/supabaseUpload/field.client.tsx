'use client';
import { useField, useFormFields, useDocumentInfo } from '@payloadcms/ui';

export const SupabaseUploadFieldClient = () => {
    // const document = useDocumentInfo();

    console.log(document);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', paddingBottom: '20px' }}>
            <p>Supabase Upload Field Client</p>
            <input
                type='file'
                accept='image/*'
            />
        </div>
    )
}

export default SupabaseUploadFieldClient;