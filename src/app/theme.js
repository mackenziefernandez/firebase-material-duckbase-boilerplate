import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    // error: {
    //   main: AppColors.ERROR_COLOR
    // },
    // primary: {
    //   main: AppColors.PRIMARY_COLOR,
    //   dark: AppColors.DARK_PRIMARY_COLOR
    // },
    // secondary: {
    //   main: AppColors.SECONDARY_COLOR
    // },
    // text: {
    //   primary: AppColors.TEXT_COLOR,
    //   hint: AppColors.LIGHT_TEXT_COLOR
    // }
  },
  spacing: {
    // unit: 8
  },
  props: {
    // MuiFormControl: {
    //   margin: 'dense'
    // }
  },
  overrides: {
    // MuiButton: {
    //   raised: {
    //     backgroundColor: AppColors.WHITE
    //   },
    //   raisedPrimary: {
    //     backgroundColor: AppColors.PRIMARY_COLOR
    //   }
    // },
    // MuiFormControl: {
    //   root: {
    //     width: '16rem'
    //   }
    // },
    // MuiInput: {
    //   underline: {
    //     '&:before': {
    //       borderBottomColor: AppColors.DIVIDER_COLOR,
    //     }
    //   }
    // }
  }
});
