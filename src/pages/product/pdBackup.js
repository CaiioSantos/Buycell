<Grid className={classes.root} item xs={6}>
<Typography component="h1" variant="h5" color="secondary" style={{marginTop: 100}}>
iPhone 11 Pro Max 512GB Prata, lava, cozinha, passa e os caralho a quatro
</Typography>
<Typography variant="h6" color="Primary" component="p">
          R$6.999,00
          
          <br />
          {'"a benevolent smile"'}
          </Typography>
<img
  className={classes.img}
  src={tutorialSteps[activeStep].imgPath}
  alt={tutorialSteps[activeStep].label}
/>
<MobileStepper
  steps={maxSteps}
  position="static"
  variant="text"
  activeStep={activeStep}
  nextButton={
    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
      Next
      {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
    </Button>
  }
  backButton={
    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
      {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      Back
    </Button>
  }
/>
</Grid>