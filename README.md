# Componente Toast

## Portada

**Nombre:** Mendoza Vargas Braulio  
**Componente:** Notificación Toast reutilizable

## ¿Qué problema resuelve?

Este componente permite mostrar mensajes visuales dentro de una página web de forma rápida y reutilizable.

Puede utilizarse para mostrar mensajes de:

- Éxito
- Error
- Información

El componente evita tener que crear una notificación diferente cada vez, ya que se reutiliza la misma función cambiando únicamente el mensaje y el tipo.

---

# Instalación

Para utilizar el componente se deben incluir los archivos CSS y JavaScript dentro del proyecto HTML.

## Incluir CSS

Dentro de la etiqueta `<head>`:

```html
<link rel="stylesheet" href="css/componente.css">
```

## Incluir JavaScript

Antes de cerrar la etiqueta `</body>`:

```html
<script src="js/componente.js"></script>
```

---

# Uso

La función principal del componente es:

```javascript
mostrarToast(mensaje, tipo);
```

Recibe dos parámetros:

- `mensaje`: texto que aparecerá en la notificación.
- `tipo`: determina el tipo de mensaje.

## Ejemplo de éxito

```javascript
mostrarToast("Datos guardados correctamente", "exito");
```

## Ejemplo de error

```javascript
mostrarToast("Ocurrió un error", "error");
```

## Ejemplo de información

```javascript
mostrarToast("Tienes una nueva notificación", "info");
```

También puede utilizarse directamente desde un botón:

```html
<button onclick="mostrarToast('Datos guardados correctamente', 'exito')">
    Mostrar éxito
</button>
```

```html
<button onclick="mostrarToast('Ocurrió un error', 'error')">
    Mostrar error
</button>
```

```html
<button onclick="mostrarToast('Tienes una nueva notificación', 'info')">
    Mostrar información
</button>
```

De esta manera se reutiliza el mismo componente con distintos mensajes y tipos.

---

# Capturas de pantalla


## Toast de éxito

![Toast de éxito](img/exito.png)

## Toast de error

![Toast de error](img/error.png)

## Toast informativo

![Toast informativo](img/info.png)

---

# Video demostrativo

En el video se muestra:

- El problema que resuelve el componente.
- Cómo se incluye el CSS y JavaScript.
- Cómo se utiliza la función `mostrarToast()`.
- El componente funcionando con diferentes mensajes.

Video: jeje