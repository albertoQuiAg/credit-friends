# credit-friends
credit friend webapp


-- video demostrativo

        https://www.useloom.com/share/ab37b64c01ad403bba7f5cbbb636ea33


-- requisitos

        - utilizar chrome o mozilla de preferencia.

        - instalar nodejs y asegurarse de tener la version 8.11 o mayor
        y npm 5.6 o mayor.

        - instalar el CLI de angular y asegurarse que sea la version 6.
        - TENER ACCESO A INTERNET IMPORTANTE


-- base de datos (firebase)

        la base de datos se crea conforme se ingrese el primer dato y es necesario
        tener acceso a internet de lo contrario no podran entrar a la aplicación.

        ** ejemplo de estructura de colecciones **

        {
                "solicitudes" : { ---> rama principal
                        "-LCfo2otEd2p7mrS7gc-" : { ---> id push
                        "contra" : 0,
                        "favor" : 1,
                        "fecha" : "16/5/2018 19:56",
                        "monto" : 10000,
                        "plazo" : "3",
                        "status" : "A",
                        "total" : 11200.000000000002,
                        "uid" : "m9xXEpvp3pXEJRHpV2MQk85LaaK2",
                        "votantes" : [ "uH92u90byLdOLcYPLYj37ORhqgr1" ] --> array id de votantes
                        }
                },
                "usuarios" : { --> rama principal
                        "uH92u90byLdOLcYPLYj37ORhqgr1" : {
                        "email" : "pedro@prueba.com",
                        "nombre" : "Pedro Alberto"
                        }
                }
        }

        ******************************************


-- requerimientos no resueltos

        - eliminar sesiones activas.


-- instalaciones de paquetes e instrucciones para ejecutar la aplicación.
    
        Abrir una ventana de comando y ubicarse en la carpeta principal del proyecto y ejecutar el siguiente comando:
        npm install y esperar la instalación.
        Con esto se instalara express, nodemon cors, y firebase-admin.
        Estas dependencias se encuentran en el package.json  

        HASTA ESTE PUNTO ya es posible ejecutar la aplicación solo es necesario en el cmd en la misma ruta ejecutar el
        comando npm run dev y abrir el explorador web (CHROME de preferencia) e intrucir localhost:3000
        Es posible ya que en la carpeta src/dist se encuentra el proyecto de angular compilado.

        -----------------------------------------------------------------------------------------------------------
        OPCIONAL

        Para instalar las dependencias del proyecto angular en caso que se quiera ejecutar por sepadado es necesario entrar con
        CMD a la dirección concredito/src/views y ejecutar los siguientes comandos:

        npm install --save-dev @angular/cli@latest
        npm install

        Ya que la instalación finalice ejecutar el siguiente comando:
        ng serve --open

        con esto el explorador se abrira automaticamente y se mostrara la aplicación.
        NOTA: es necesario que el servidor de express este corriendo.
        


        

