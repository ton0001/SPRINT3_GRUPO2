
const request = require('supertest');
const { app , server} = require('../server');
const { generateJWT } = require('../helpers/generateJWT');

afterEach(() => {
    server.close()
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
            ok: expect.any(Boolean)
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
            price: expect.any(String),
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
      ok: expect.any(Boolean)
         })
   );
   
   });

   test('Pedir productos sin lograrse primero', async () => {
       
     const { statusCode, body } = await request(app).get('/api/v3/products/mostwanted');

     expect(statusCode).toBe(401);
     expect(body).toEqual(expect.objectContaining({
           msg: expect.any(String),
           ok: expect.any(Boolean)
        })
     );
     
  });

});