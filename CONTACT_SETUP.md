# 📧 Configuración del Formulario de Contacto

## 🛠️ Configuración para Desarrollo Local

1. **Crea el archivo de variables de entorno:**

   ```bash
   cp .env.local.example .env.local
   ```

2. **Obtén una API key de Resend:**

   - Ve a [resend.com](https://resend.com)
   - Crea una cuenta gratuita
   - Genera una API key

3. **Configura las variables en `.env.local`:**
   ```env
   RESEND_API_KEY=tu_api_key_de_resend_aqui
   ```

## 🚀 Configuración para Producción (Vercel/Netlify)

### En Vercel:

1. Ve a tu proyecto en el dashboard de Vercel
2. Settings → Environment Variables
3. Añade: `RESEND_API_KEY` con tu API key

### En Netlify:

1. Ve a Site settings → Environment variables
2. Añade: `RESEND_API_KEY` con tu API key

## ✅ Verificación

El formulario debería funcionar correctamente una vez configuradas las variables de entorno. Los logs en la consola del navegador y del servidor te ayudarán a diagnosticar cualquier problema.

## 🔧 Solución de Problemas

- **Error "Email service not configured"**: La variable `RESEND_API_KEY` no está configurada
- **Error 400/500**: Revisa los logs del servidor para detalles específicos
- **Formulario no envía**: Verifica la conexión de red y las variables locales
