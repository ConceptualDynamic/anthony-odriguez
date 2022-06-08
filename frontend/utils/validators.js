const urlRegex = /[(htps?):/w.a-zA-Z0-9@%_+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/

export const rules = {
  required: value => !!value || 'Este campo es obligatorio.',
  email: value => (!!value && /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) || 'Correo electronico invalido',
  text: value => (!!value && /^([a-zA-ZñÑ]+)(\D+)$/.test(value)) || 'Campo invalido.',
  passwordMinLength: (value => !!value && value.length >= 8) || 'Debe contener al menos 8 caracteres.',
  url: value => (!!value && urlRegex.test(value)) || 'Debe insertar una URL valida.'
}