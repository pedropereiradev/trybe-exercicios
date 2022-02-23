const validate = new window.JustValidate("#form-trip");

validate
  .addField("#name", [
    {
      rule: "minLength",
      value: 10,
    },
    {
      rule: "maxLength",
      value: 40,
    },
    {
      rule: "required",
      errorMessage: "Nome é necessário",
    },
  ])

  .addField("#email", [
    {
      rule: "minLength",
      value: 10,
    },
    {
      rule: "maxLength",
      value: 50,
    },
    {
      rule: "required",
      errorMessage: "Email é necessário",
    },
    {
      rule: "email",
      errorMessage: "Email inválido!",
    },
  ])

  .addField("#textarea", [
    {
      rule: "maxLength",
      value: 500,
    },
    {
      rule: "required",
      errorMessage: "Necessário preencher campo",
    },
  ])

  .addField("#consent-checkbox", [
    {
      rule: "required",
      errorMessage: "Necessário",
    },
  ]);
 