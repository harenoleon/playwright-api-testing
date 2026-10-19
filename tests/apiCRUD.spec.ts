
import { test, expect } from '@playwright/test';

const BASE_URL = 'https://api.restful-api.dev';

//API-001
test('GET - List objects', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/objects`);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('name');
});

//API-002
test('create New object with wrong data format',async({request}) => {
    let objects_id : string

    //เก็บค่าส่งกลับ
    const response = await request.post(`${BASE_URL}/objects`,{
        
        headers:{'Content-Type':'application/json'},
        data : {
            "name": "Apple MacBook Pro 16",
            "year": 2019,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
        }
    })

    const body = await response.json();
    
    objects_id = body.id
    console.log('Status:', response.status());
    console.log('Response:', JSON.stringify(body, null, 2));

    expect(body.name).toBe('Apple MacBook Pro 16')
    expect(body.data).toBeNull();



    await request.delete(`${BASE_URL}/objects/${objects_id}`)


})

test('CRUD - Create, Read, Update and Delete object', async ({ request }) => {
    let objectId: string | undefined;
    let deleted = false;

    try {
        // 1. CREATE  API-003
        const createResponse = await request.post(`${BASE_URL}/objects`, {
            headers: {
            'Content-Type': 'application/json',
            },
            data: {
                name: 'QA Test Product',
                    data:{
                    year: 2026,
                    price: 999.99,
                    'CPU model': 'Test CPU',
                    'Hard disk size': '1 TB',
                        },
                },
        });

        /*console.log('URL:', createResponse.url());
        console.log('Status:', createResponse.status());
        console.log('Allow:', createResponse.headers()['allow']);
        console.log('Response:', await createResponse.text());
        */
       
        expect(createResponse.status()).toBe(200);

        const created = await createResponse.json();
        objectId = created.id

        console.log('POST response:', JSON.stringify(created, null, 2));

        expect(created.id).toBeTruthy();
        expect(created.name).toBe('QA Test Product');
        expect(created.data).not.toBeNull();
        expect(created.data['CPU model']).toBe('Test CPU');


        //API-004
        // 2. READ
        const getResponse = await request.get(
            `${BASE_URL}/objects/${objectId}`
        );

        expect(getResponse.status()).toBe(200);

        const readBody = await getResponse.json();
        console.log(JSON.stringify(readBody, null, 2));

        expect(readBody.id).toBe(objectId);
        expect(readBody.data).not.toBeNull();
        expect(readBody.data['CPU model']).toBe('Test CPU');

        // 3. UPDATE API-005
        const updateResponse = await request.put(
            `${BASE_URL}/objects/${objectId}`,
            {
                data: {
                    name: 'QA Updated Product',
                    data: {
                        year: 2026,
                        price: 1299.99,
                        'CPU model': 'Updated CPU',
                        'Hard disk size': '2 TB',
                    },
                },
            }
        );

        expect(updateResponse.status()).toBe(200);

        

        const updated = await updateResponse.json();


        expect(updated.id).toBe(objectId);
        expect(updated.name).toBe('QA Updated Product');
        expect(updated.data).not.toBeNull();
        expect(updated.data.year).toBe(2026);
        expect(updated.data.price).toBe(1299.99);
        expect(updated.data['CPU model']).toBe('Updated CPU');
        expect(updated.data['Hard disk size']).toBe('2 TB');

        console.log('POST response:', JSON.stringify(updated, null, 2));

        // 4. DELETE API-006
        const deleteResponse = await request.delete(
            `${BASE_URL}/objects/${objectId}`
        );

        expect(deleteResponse.status()).toBe(200);
        deleted = true;

        // 5. VERIFY DELETION  API-007
        const verifyResponse = await request.get(
            `${BASE_URL}/objects/${objectId}`
        );

        expect(verifyResponse.status()).toBe(404);
    } finally {
        // Cleanup หาก Test ล้มเหลวก่อนลบข้อมูลสำเร็จ API -008
        if (objectId && !deleted) {
            await request.delete(`${BASE_URL}/objects/${objectId}`);
        }
    }
});
