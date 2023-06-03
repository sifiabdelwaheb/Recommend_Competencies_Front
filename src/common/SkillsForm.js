function SkillsForm(edit, value) {
  return {
    expertise: {
      elementType: "Select",
      elementConfig: {
        type: "text",
        label: "Skills",
        errormsg: "Sélectionner  une  expertise ",
        // prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: edit ? { label: value.expertise, value: value.expertise } : "",
      validation: {
        required: true,
      },

      valid: edit ? true : false,
      touched: false,

      options: [
        { label: "Dialyse", id: "Dialyse" },
        { label: "Pharma", id: "Pharma" },
      ],
    },
  };
}

export default SkillsForm;
