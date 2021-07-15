import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') {
        const TOKEN = '9a52c118a20efcf46b124df8347647';
        const client = new SiteClient(TOKEN);
        
        
        const registroCriado = await client.items.create({
            itemType: "970639", 
            ...request.body,
            
        })
    
        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}