#!/bin/bash
echo " "
echo "   _____                _     _            _____   _               _     "
echo "  / ____|              | |   (_)          / ____| | |             | |    " 
echo " | |  __    ___   ___  | |_   _    ___   | |      | |__     __ _  | |_   "
echo " | | |_ |  / _ \ / __| | __| | |  / _ \  | |      | '_ \   / _` | | __|  "
echo " | |__| | |  __/ \__ \ | |_  | | | (_) | | |____  | | | | | (_| | | |_   "
echo "  \_____|  \___| |___/  \__| |_|  \___/   \_____| |_| |_|  \__,_|  \__|  by Aventura Digital"
echo " "   
echo "ACTUALIZANDO A LA ÚLTIMA VERSIÓN..."
echo " "

sleep 2

echo " "
echo "DESCARGAR LAS ACTUALIZACIONES"
echo " "

sleep 2

git reset --hard
git pull

echo " "
echo "ACCEDER A LA BACKEND"
echo " "

sleep 2

cd backend

echo " "
echo "ACTUALIZAR LOS ARCHIVOS BACKEND"
echo " "

sleep 2

sudo rm -rf node_modules
npm install
sudo rm -rf dist
npm run build

echo " "
echo "EJECUTANDO EL DB:MIGRATE"
echo " "

sleep 2

npx sequelize db:migrate

echo " "
echo "EJECUTANDO EL DB:SEED:ALL"
echo " "

sleep 2

npx sequelize db:seed:all

echo " "
echo "ACCEDER A LA FRONTEND"
echo " "

sleep 2

cd ../frontend

sleep 2

echo " "
echo "VERIFICANDO  CONFIG.JSON"
echo " "

sleep 2

if [ ! -e src/config.json ]; then
  echo "creando el archivo config.json"
  cp src/config.json.example src/config.json
  else
  echo "El archivo config.json ya existe"
fi


sleep 2

echo " "
echo "ACTUALIZAR LOS ARCHIVOS FRONTEND"
echo " "

sleep 2

sudo rm -rf node_modules
npm install
rm -rf build
npm run build

echo " "
echo "RESTART PM2"
echo " "

sleep 2

pm2 restart all

echo " "
echo "GestioChat ACTUALIZADO EXITOSAMENTE!!!"
echo " "