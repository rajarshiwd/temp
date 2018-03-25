export const signinFormJSON = {
  name: 'signinForm',
  type: 'section',
  active: true,
  class: {},
  controls: [
    {
      name: 'username',
      type: 'input',
      active: true,
      label: {
        name: 'user name',
        class: {}
      },
      attrs: {
        type: 'text'
      },
      class: {},
      dataKey: 'username',
      value: ''
    },
    {
      name: 'userlast',
      type: 'input',
      active: true,
      label: {
        name: 'last name',
        class: {}
      },
      attrs: {
        type: 'text'
      },
      class: {},
      dataKey: 'username',
      value: ''
    },
    {
      name: 'password',
      type: 'input',
      active: true,
      label: {
        name: 'password',
        class: {}
      },
      class: {},
      value: '',
      attrs: {
        type: 'password'
      }
    },
    {
      name: 'submitBtn',
      type: 'button',
      active: true,
      label: {
        name: 'submit',
        class: {}
      },
      class: {
        button: 'btn btn-warning btn-block'
      },
      attrs: {
        type: 'button'
      }
    }
  ]
}
