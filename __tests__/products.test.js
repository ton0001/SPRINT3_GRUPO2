const request = require('supertest');
const { app , server} = require('../server');
const { generateJWT } = require('../helpers/generateJWT');

afterEach(() => {
    server.close()
    jest.setTimeout(30000);

 });



 describe('GET api/v3/products/mostwanted', () => {

    test('Debe obtener todos los productos que tengan mostWanted=true', async () => {
        

       const token = await generateJWT();
 
       const { statusCode, body } = await request(app).get('/api/v3/products/mostwanted').auth(token, { type: 'bearer' });
    
      expect(statusCode).toEqual(200);

      expect(body).toEqual(expect.arrayContaining([
          expect.objectContaining({
             id: expect.any(Number),
             title: expect.any(String),
             price: expect.any(String),
             description: expect.any(String),
             category_id: expect.any(Number),
             stock: expect.any(Number),  
             mostwanted: expect.any(Boolean)
          })
       ]));
 
       
      });

    test('Pedir productos sin lograrse primero', async () => {
        
      const { statusCode, body } = await request(app).get('/api/v3/products/mostwanted');

      expect(statusCode).toBe(401);
      expect(body).toEqual(expect.objectContaining({
            msg: expect.any(String),
            ok: false
         })
      );

          
   });

 });


 describe('GET api/v3/products?category=id', () => {

   test('Debe obtener todos los productos que correspondan con esa categoria', async () => {
       
      const id = "7"
      const token = await generateJWT();

      const { statusCode, body } = await request(app).get('/api/v3/products?category=' + id).auth(token, { type: 'bearer' });

     expect(statusCode).toEqual(200);

     expect(body).toEqual(expect.arrayContaining([
         expect.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
            price : expect.any(String),
            description: expect.any(String),
            category_id: expect.any(Number),
            stock: expect.any(Number),  
            mostwanted: expect.any(Boolean)
         })
      ]));
      
   });

   test('Error de categoria no existente', async () => {
       
      const id = "99"
      const token = await generateJWT();

      const { statusCode, body } = await request(app).get('/api/v3/products?category=' + id).auth(token, { type: 'bearer' });
      // console.log(body)

     expect(statusCode).toEqual(400);

     expect(body).toEqual(expect.objectContaining({
      msg: expect.any(String),
      ok: false
         })
   );
   
   });

   test('Pedir productos sin lograrse primero', async () => {
       
     const { statusCode, body } = await request(app).get('/api/v3/products/mostwanted');

     expect(statusCode).toBe(401);
     expect(body).toEqual(expect.objectContaining({
           msg: expect.any(String),
           ok: false
        })
     );
     
  });

});

describe('GET api/v3/products/search?q=keyword', () => {

   test('Debe obtener todos los productos que tengan algun campo con la keyword', async () => {
       

      const token = await generateJWT();
      const keyword = 'chocolate'

      const { statusCode, body } = await request(app).get('/api/v3/products/search?q=' + keyword).auth(token, { type: 'bearer' });
   
      // console.log(statusCode, body);
     expect(statusCode).toEqual(200);

     expect(body).toEqual(expect.arrayContaining([
         expect.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
            price: expect.any(String),
            description: expect.any(String),
            category_id: expect.any(Number),
            stock: expect.any(Number),  
            mostwanted: expect.any(Boolean)
         })
      ]));

      
     });

     test('No se encuentran productos con ese keywrod', async () => {
   
      const keyword = 'hgriedgd'
      const token = await generateJWT();

      const { statusCode, body } = await request(app).get('/api/v3/products/search?q=' + keyword).auth(token, { type: 'bearer' });
      // console.log(statusCode, body);
     expect(statusCode).toBe(404);
     expect(body).toEqual(expect.objectContaining({
           msg: expect.any(String),
           ok: false
        })
     );
   })


   test('Pedir productos sin lograrse primero', async () => {
   
      const keyword = 'hgriedgd'
     const { statusCode, body } = await request(app).get('/api/v3/products/search?q=' + keyword);
      // console.log(statusCode, body);
     expect(statusCode).toBe(401);
     expect(body).toEqual(expect.objectContaining({
           msg: expect.any(String),
           ok: false
        })
     );

         
  });

});
