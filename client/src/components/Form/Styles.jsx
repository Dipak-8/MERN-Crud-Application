const rootStyles = {
  '& .MuiTextField-root': {
    m: 1, // Equivalent to theme.spacing(1)
  },
};

const paperStyles = {
  p: 2, // Equivalent to theme.spacing(2)
};

const formStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const fileInputStyles = {
  width: '97%',
  my: 1, // Equivalent to margin: '10px 0'
};

const buttonSubmitStyles = {
  mb: 1, // Equivalent to marginBottom: 10
};

export { rootStyles, paperStyles, formStyles, fileInputStyles, buttonSubmitStyles };
