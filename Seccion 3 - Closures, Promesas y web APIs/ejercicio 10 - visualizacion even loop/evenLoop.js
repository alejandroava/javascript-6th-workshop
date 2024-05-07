/*¿Qué tareas se consideran macrotareas y cuáles son microtareas?
R / Las macrotareas son los setTimeout y las microtareas son las promesas y then.

¿Cómo se relacionan las macrotareas y microtareas con el event loop?
R/ Tanto las macrotareas como ls microtareas esperan en cola para ser llamadas al call stack donde se ejecutan

¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?
R/ Cuando la microtarea  genera una macrotarea , se llama al al call stack la microtarea y se genera la macrotarea en la lista de espera de macrotareas

¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?
R/ Las promesa se leen y se guardan en la cola de espera de las microtareas para ser ejecutadas primero que las macrotareas, los setTimeout se gardan en la cola de espera de las tareas y se ejecutan despues de las microtareas*/