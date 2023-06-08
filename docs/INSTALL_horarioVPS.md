# Cambiar la hora del VPS a través del terminal

NOTA: El tutorial a continuación debe usarse en los casos en que alguna implementación que depende del tiempo no funcione correctamente debido a la zona horaria del VPS.

================================================

1. Verifique la hora actual de VPS a través de la terminal

```bash
date
```

2. Comando para cambiar la zona horaria de VPS

```bash
sudo dpkg-reconfigure tzdata
```

3. Se abrirá una pantalla de configuración de zona horaria donde tendrás que elegir ```America``` y selecciona ok

4. En esta pantalla necesitarás la ciudad correspondiente a tu zona horaria, en mi caso usaré ```Lima```

5. Ahora se mostrará un registro similar a este informando que la zona horaria se cambió con éxito

```Current default time zone: 'America/Lima'```  
```Local time is now:      Tue Mar 20 08:21:57 -03 2018.```  
```Universal Time is now:  Tue Mar 20 11:21:57 UTC 2018.```