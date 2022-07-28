El front esta ubicado en la ruta: http://localhost:3000/
El back esta corriendo en la ruta:  http://localhost:4000/

* Recordar hacer yarn install o npm install. 
* Para correr el FRONT se usa -> npm run start. 


El formato json para crear un carrito es el detallado a continuacion, se crea id y date automaticamente:
{
		"id": 4,
		"date": 1655445748919,
		"productos": [
			[
				{
					"id": 1,
					"title": "Pantalon 1",
					"price": "20019",
					"img": "https://http2.mlstatic.com/D_NQ_NP_770674-MLA49029549687_022022-W.jpg",
					"cantidad": 2
				},
				{
					"id": 4,
					"title": "Pantalon 4",
					"price": "20019",
					"img": "https://media.revistagq.com/photos/5e736faf5bcabb0008f4db04/master/w_1600%2Cc_limit/jeans%2520zara.jpg",
					"cantidad": 3
				}
			]
		]
	}

El modelo de productos es el siguiente:

	{
		"id": 8,
		"title": "Pantalon 4",
		"price": "20019",
		"thumbnail": "https://media.istockphoto.com/photos/mens-trousers-picture-id510615049?k=20&m=510615049&s=612x612&w=0&h=V2qWdnou1w6ctJnfiRlYxQp6QwgX8yRMBBOCMxm7ei0=",
		"available_quantity": 3,
		'category': "pantalones",
		"condition": "new"
	}