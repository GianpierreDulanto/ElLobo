# 🐺 El Porneo del Lobo

Aplicación de gestión de torneos para el canal de Kick de El Lobito del Pueblo.

## 🚀 Deploy en Netlify (Gratuito)

### Pasos para hacer deploy:

1. **Sube el proyecto a GitHub:**
   ```bash
   git remote add origin https://github.com/TU_USUARIO/ProyectoLobo.git
   git push -u origin main
   ```

2. **Conecta con Netlify:**
   - Ve a https://app.netlify.com
   - Click en "Add new site" → "Import an existing project"
   - Selecciona GitHub y autoriza
   - Elige el repositorio "ProyectoLobo"

3. **Configuración automática:**
   - Netlify detectará automáticamente `netlify.toml`
   - Build command: `npm run build`
   - Publish directory: `app/dist`

4. **Deploy automático:**
   - Cada push a `main` se desplegará automáticamente
   - Tu sitio estará en: `https://tudominio.netlify.app`

## 📝 Desarrollo Local

```bash
cd app
npm install
npm run dev
```

## 🏗️ Build para producción

```bash
cd app
npm run build
npm run preview
```

## ✨ Características

- ✅ Detección automática de livestream en Kick
- ✅ Gestor de torneos en vivo
- ✅ Interfaz moderna y responsiva
- ✅ Sincronización en tiempo real

## 🔗 Links

- 📺 Canal Kick: https://kick.com/el_lobito_del_pueblo
- 💰 Rainbet: https://rainbet.com/?r=luiseramos
- 🤝 WhatsApp: https://chat.whatsapp.com/LHQye4otyO27Urmq07gkOR
