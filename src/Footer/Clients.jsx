import React from 'react'
import Services from './Services'

const Clients = () => {
  return (
    <div>
  <Services/>
<section className="py-3 py-md-5 py-xl-8">
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h2 className="mb-4 display-5 text-center">Clients</h2>
        <p className="text-secondary mb-5 text-center">Our clients are the backbone of our business. We are proud to work with a wide range of companies, from small businesses to Fortune 500 enterprises.</p>
        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
      </div>
    </div>
  </div>

  <div className="container overflow-hidden">
    <div className="row gy-5">
      <div className="col-6 col-md-3 align-self-center text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="125" height="65" viewBox="0 0 125 65" fill="currentColor" className="text-dark">
          <path d="M31.75,14.84c15.02,2.84,29.72,.88,35.7,.55-10.07,9.01-10.28,27.63-22.14,27.72-1.82,.01-3.91-.41-6.35-1.36,8.43-19.24-4.19-24.25-7.21-26.9h0Zm-4.65,1.64c5.54-.19,12.32,6.08,12.62,12.62,.43,9.34-4.89,13.45-4.84,16.65,.05,3.01,2.54,5.76,3.5,7.72h-7.71c-.43-1.49-1.53-2.14-1.56-2.25-.46-1.57,.56-2.81,.53-5.22-.1-6.93-10.64-7.36-10.93-20.45-.1-4.72,2.78-8.88,8.39-9.08h0Zm44.76,14.38c-3.05,.07-4.92,3.29-8.04,6.73-1.68,2.72-3.07,11.4-3.52,15.88h8.19c.43-3.59-1.94-2.8-1.79-4.25,.51-5,3.48-4.41,4.02-9.03,3.63-.33,5.44-2.48,5.54-4.75,.14-3.32-2.78-4.61-4.38-4.57h0Zm3.45,9.86c-.46,.22-1.32,1.18-3.14,1.19-1.13,3.17-3.01,3.26-3.93,6.41-.31,.51,1.47,1.39,.98,2.36,.24,.33,1.27,1,1.34,2.79h6.06c-.9-4.36-4.19-4.23-4.21-5.69-.05-3.14,2.36-5.35,2.89-7.06h0Zm-37.43,1.07c.22,1.43-1.69,1.83-1.59,5.04,.04,1.16,2.41,4.65,3.89,6.64h5.31c-2.53-4.38-6.12-5.5-6.14-6.78-.03-1.34,1.25-3.26-1.46-4.89h0Zm-19.79-12.41c.88,1,1.63,3.54,1.49,6.05-.13,2.51-1.46,3.35-2.02,4.34-1.08-1.42-1.59-2.98-1.59-5.15s1.46-4.35,2.12-5.24h0Zm57.96-14.97c3.82-.37,5.48,2.34,5.62,4.89,.26,4.8-3.21,4.87-3.29,8.63-.04,2.22,.69,1.34,.87,6.41,.13,3.64-2.31,5.17-3.38,5.86-.03-.46,1.4-3.12,1.13-6.47-.24-2.93-3.06-4.19-5.01-4.2-5.21-.02-8.73,9.68-15.36,12.5-.78,.33-3.01,.25-3.32-.17,8.84-7.17,7.76-26,22.74-27.45h0Zm11.6-.91c.04,1.01,.16,2.7-1.09,4.12s-2.98,1.5-3.8,1.66c.02-1.36,.51-2.47,1.53-3.75s2.57-1.82,3.37-2.03h0Zm-.22,10.65c.99,4.6,9.12,9.62,8.84,11.54-.3,2.12,.84,5.85-1.94,6.36-.26-1.32-.78-1.89-1.53-1.87-1.03,.03-1.34,2.5-1.18,4.01-1.9,.42-3.84-1.59-5.69-2.91-2.04-1.47-4.11-2.88-5.73-4.72,.98-3.81-.89-10.1,.19-11.33,.91-1.03,4.46,.44,7.03-1.09h0Zm12.25-.37c2.03,4.23-1.66,8.76-4.59,8.48-.83-.08-1.89-1.51-1.58-2.49,2.86-1.81,5.18-4.67,6.16-5.99h0Zm-9.28-8.46c.78,3.89-1.88,8.98-8.23,8.54,.71-1.02,.16-2.73,.68-3.71,2.79-.31,6.26-3.21,7.55-4.83Zm18.78,6.77c2.22,5.42-7.65,15.37-10.59,15.84-1.75,.28-1.52-3.14-1.38-4.31,2.86-1.81,10.26-7.29,11.98-11.52h0Zm-20.12,9.95c.07,1.6-.84,2.38-1.75,2.22-.95-.17-1.4-1.66-1.23-2.75,.92,.72,2.28,.74,2.98,.53h0ZM8.63,59.58H106.17c1.31,0,2.61-.56,3.64-1.46h0c1.06-.93,1.83-2.16,2.06-3.5l7.73-45.17c.04-.25,.06-.51,.06-.77,0-.84-.26-1.58-.71-2.14-.45-.55-1.1-.94-1.88-1.07-.24-.04-.48-.06-.71-.06H18.82c-1.31,0-2.61,.56-3.64,1.46-1.06,.91-1.83,2.15-2.06,3.49L5.39,55.54c-.04,.25-.06,.51-.06,.77,0,.84,.26,1.58,.72,2.14,.45,.55,1.1,.94,1.88,1.07,.21,.04,.45,.06,.71,.06h0Zm0,5.42c-.54,0-1.08-.05-1.61-.14-2.09-.37-3.85-1.42-5.08-2.93-1.23-1.51-1.94-3.45-1.94-5.61,0-.54,.05-1.1,.15-1.68L7.87,9.46c.45-2.62,1.89-4.99,3.85-6.68,1.98-1.71,4.51-2.77,7.1-2.77H116.37c.54,0,1.08,.05,1.61,.14,2.09,.37,3.84,1.42,5.08,2.93,1.23,1.51,1.94,3.45,1.94,5.61,0,.54-.05,1.1-.15,1.68l-7.73,45.17c-.45,2.63-1.89,5-3.85,6.7h0c-1.98,1.69-4.5,2.76-7.1,2.76H8.63Z" fill-rule="evenodd" />
        </svg>
      </div>
      <div className="col-6 col-md-3 align-self-center text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="125" height="65" viewBox="0 0 125 65" fill="currentColor" className="text-dark">
          <path d="M0,20.32v10.16H25.5c2.96,0,6.75-3.19,6.75-8.48,0-2.13,.7-3.51-1.45-6.32l-3.26-4.51c-1.87-2.03,.22-2.03,1.79-2.03h10.76V30.48h8.54V9.14h11.51V0H22.88C18.35,0,16.13,5.07,16.26,7.72c.13,2.64,.54,5.97,4.31,9.96,3.44,3.64-1.7,2.64-2.22,2.64H0ZM79.02,0h-13.77l-7.72,30.48h8.59l1.39-4.27h9.06l1.35,4.27h8.42L79.02,0h0Zm-9.59,18.9l2.96-11.18,2.79,11.18h-5.75Zm44.1,1.42c-3.31,0-3.31-1.42-3.31-1.42,2.84,0,5.35-4.82,5.35-9.76S111.44,0,108.13,0h-18.53V30.48h9.41v-10.16s4.01,5.49,6.1,7.72c2.09,2.24,2.27,2.44,5.11,2.44h14.78v-10.16s-8.15,0-11.47,0h0Zm-8.54-7.11h-5.98V7.72h5.98c2.74,0,3.21,5.49,0,5.49ZM0,34.34H9.63l2.44,10.16,2.27-10.16h10.11l2.61,10.16,2.62-10.16h8.37l-7.67,30.49h-7.67l-3.36-14.43-3.79,14.43H7.71L0,34.34Zm57.81,.18h-13.77l-7.72,30.48h8.59l1.39-4.27h9.07l1.35,4.27h8.42l-7.32-30.48Zm-9.59,18.9l2.96-11.18,2.79,11.18h-5.75Zm65.48-9.92c-1.57,0-3.28,.21-1.41,2.25l3.26,4.51c2.14,2.81,2.11,3.98,2.11,6.11,0,5.28-4.48,8.48-7.45,8.48l-20.6,.16c-2.84,0-3.01-.2-5.1-2.44-2.09-2.24-6.1-7.72-6.1-7.72v10.16h-9.41v-30.48h18.53c3.31,0,7.45,4.2,7.45,9.14s-2.52,9.76-5.36,9.76c0,0,1.25,1.46,3.34,1.46s10.15,0,10.15,0c.52,0,5.65,1,2.22-2.64-3.77-3.99-4.18-7.32-4.31-9.96s1.83-7.94,6.37-7.94h17.62v9.15h-11.3Zm-29.31,4.23h-5.98v-5.49h5.98c2.74,0,3.21,5.49,0,5.49Z" fill-rule="evenodd" />
        </svg>
      </div>
      <div className="col-6 col-md-3 align-self-center text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="105" height="65" viewBox="0 0 105 65" fill="currentColor" className="text-dark">
          <path d="M88.47,64.54v-13.95h-5.75v13.95h5.75Zm-30.46-5.79v-7.95h-5.58v6.07c0,1.77-.07,2.26-.18,2.72-.39,1.27-1.73,1.84-3.11,1.84-1.91,0-2.79-.74-3.14-1.91-.11-.39-.14-.81-.18-1.24-.04-.46,0-.95,0-1.48v-6h-5.65v7.98c0,1.8,.6,3.14,1.59,4.06,1.69,1.66,4.55,2.15,7.2,2.15,3.21,0,5.68-.46,7.45-2.19,.92-.88,1.59-2.05,1.59-4.06h0Zm-27.38-.99c-.28-.05-.56-.07-.85-.07h-6.35c-.32,0-.67,.04-.85,.07,.11-.11,.32-.32,.53-.6l2.86-4.73c.39-.63,.56-1.06,.64-1.24,.07,.18,.25,.6,.64,1.27l2.93,4.77c.14,.21,.35,.42,.46,.53h0Zm10.66,6.78l-12.7-19.07h-7.13l1.87,2.22s.11,.07,.18,.11c-.07,.04-.14,.07-.18,.11l-11.08,16.63h6.42l1.73-2.86c.07-.14,.11-.28,.11-.35,.07,0,.25,.07,.42,.07h11.47c.18,0,.32-.04,.39-.07,0,.1,.02,.2,.07,.28l1.8,2.93h6.63Zm39.88-7.17c0-1.55-.64-3.36-2.61-5.86l-4.76-6.04h-6.63l3.78,4.24c.64,.71,1.45,1.34,1.45,1.34-.92-.53-2.08-.74-3-.74-2.19,0-4.41,.46-6.39,1.55-2.12,1.16-3.53,3.11-3.53,5.69,0,1.98,.88,3.5,2.01,4.66,2.54,2.54,7.16,2.79,8.86,2.79,2.51,0,6.42-.57,8.65-2.58,1.31-1.2,2.19-2.86,2.19-5.05h0Zm-5.51,.18c0,1.45-.95,2.54-2.15,3.14-.99,.53-2.15,.67-3.18,.67s-2.22-.21-3.21-.71c-1.2-.6-2.12-1.77-2.12-3.04,0-1.52,1.16-2.72,2.54-3.32,.85-.39,1.87-.53,2.68-.53s1.91,.11,2.79,.46c1.59,.67,2.65,1.94,2.65,3.32h0ZM86.64,0c-4.13,0-8.14,1.39-11.38,3.96C72.03,1.39,68.01,0,63.88,0c-4.13,0-8.14,1.39-11.38,3.96C49.26,1.39,45.25,0,41.12,0c-4.13,0-8.14,1.39-11.38,3.96C26.5,1.39,22.49,0,18.36,0,8.22,0,0,8.22,0,18.37s8.22,18.37,18.36,18.37c4.13,0,8.14-1.39,11.38-3.96,3.24,2.57,7.25,3.96,11.38,3.96,4.13,0,8.14-1.39,11.38-3.96,3.24,2.57,7.25,3.96,11.38,3.96,4.13,0,8.14-1.39,11.38-3.96,3.24,2.57,7.25,3.96,11.38,3.96,10.14,0,18.36-8.22,18.36-18.37S96.78,0,86.64,0ZM26.73,29.78c-2.34,1.71-5.26,2.75-8.38,2.75-7.82,0-14.15-6.33-14.15-14.16S10.53,4.21,18.36,4.21c3.12,0,6.04,1.04,8.38,2.75-2.58,3.24-3.98,7.27-3.97,11.41,0,4.14,1.4,8.16,3.97,11.41Zm3-3c-1.8-2.43-2.78-5.38-2.77-8.41,0-3.03,.96-5.98,2.77-8.41,1.81,2.43,2.78,5.38,2.77,8.41,0,3.03-.97,5.98-2.77,8.41Zm19.76,3c-2.43,1.79-5.37,2.75-8.39,2.75-3.01,0-5.95-.96-8.37-2.75,2.57-3.25,3.97-7.27,3.97-11.41,0-4.14-1.39-8.17-3.97-11.41,2.42-1.79,5.36-2.75,8.37-2.75,3.14,0,6.04,1.02,8.39,2.75-2.58,3.24-3.98,7.27-3.97,11.41,0,4.14,1.4,8.16,3.97,11.41Zm3-3c-1.8-2.43-2.78-5.38-2.77-8.41,0-3.03,.96-5.98,2.77-8.41,1.81,2.43,2.78,5.38,2.77,8.41,0,3.03-.97,5.98-2.77,8.41Zm19.76,3c-2.35,1.73-5.25,2.75-8.39,2.75s-6.02-1.02-8.37-2.75c2.57-3.25,3.97-7.27,3.97-11.41,0-4.14-1.39-8.17-3.97-11.41,2.35-1.73,5.23-2.75,8.37-2.75s6.04,1.02,8.39,2.75c-2.58,3.24-3.98,7.27-3.97,11.41,0,4.14,1.4,8.16,3.97,11.41Zm3-3c-1.8-2.43-2.78-5.38-2.77-8.41,0-3.03,.96-5.98,2.77-8.41,1.81,2.43,2.78,5.38,2.77,8.41,0,3.03-.97,5.98-2.77,8.41Zm11.38,5.75c-3.12,0-6.04-1.04-8.38-2.75,2.57-3.25,3.97-7.27,3.97-11.41,0-4.14-1.39-8.17-3.97-11.41,2.34-1.71,5.26-2.75,8.38-2.75,7.82,0,14.15,6.33,14.15,14.16s-6.33,14.16-14.15,14.16Z" fill-rule="evenodd" />
        </svg>
      </div>
      <div className="col-6 col-md-3 align-self-center text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="65" viewBox="0 0 150 65" fill="currentColor" className="text-dark">
          <path d="M75.46,7.09c1.02,.05,1.99,.46,2.77,1.16,1.05,1.04,1.33,2.78,.83,4.18-1.94,4.17-6.54,6.96-9.68,7.89-1.88,.46-4.26,.46-5.98-.23-.83,.52-1.53,2.21-2.55,1.51-1.47-1.2-.2-3.08-1.04-4.42-.17-.27-.61-.29-.84-.74-1.16-2.67,.28-5.22,1.88-7.25,2.67-3.13,10.35-6.61,14.61-2.09h0Zm-8.91,2.09c-1.49,.29-3.18,.97-4.09,2.09-.91,1.12-1.49,2.2-.94,3.36,1.94-1.51,2.88-3.59,5.04-4.87,0-.23,.33-.41,0-.58Zm9.02,.58c-3.82-.35-6.7,2.67-9.41,5.57-.17,.46-1.16,.99-.39,1.51,3.65,.35,7.14-.75,9.79-3.3,.78-.75,1.33-1.74,.94-2.78-.17-.4-.56-.81-.94-.98Zm33.09,17.28c1.77,4.52,3.26,11.65,0,16-.89,1.04-2.43,2.01-3.43,1.22-3.65-3.07-5.2-7.48-7.47-11.42-.33-.17-.33,.29-.5,.46-.83,4,.72,9.22-1.88,12.35-1,.17-1.93-.36-2.27-1.39-1.27-4.12,.05-8.41,.39-12.52,.78-2.09,1.11-4.52,2.82-6.09,2.77,1.16,4.09,4.41,5.7,6.78,1.16,1.8,2.1,3.83,3.43,5.45,1.16-.52,.59-2.11,.55-3.07-.44-3.77-1.44-7.25-2.38-10.84-.05-.93-.55-2.49,.39-3.07,2.49,1.16,3.54,3.88,4.65,6.15Zm-16.71-1.39c0,.87-.66,1.96-1.22,2.09-5.31,.87-11.23,.35-16.21,2.09-.17,.64,.55,.75,.94,.93,4.26,.7,8.74,.87,12.89,1.97,2.19,.58,2.99,3.31,3.15,5.57,.1,1.78-.55,3.94-2.21,5.16-4.09,2.73-10.35,2.61-14.5,.12-1.59-.93-3.1-2.43-3.21-4.29,0-1.47,.61-2.63,1.61-3.19,3.98-1.68,8.91-.75,12.34,1.39,.22,1.16-.98,1.1-1.55,1.51-3.82,2.32-6.7-2.61-10.24-.81-.5,.35-.86,1.32-.28,1.62,4.37,2.03,9.24,.58,13.56-.7,.5-.17,1.11-.7,1.16-1.22-.17-1.86-2.16-2.26-3.43-2.78-3.76-.99-7.91-.99-11.95-1.39-.77-.17-1.76-.74-1.99-1.39-.44-1.39-.44-3.3,.55-4.46,5.15-4.75,12.95-4.35,19.48-3.07,.44,.17,.94,.34,1.11,.87h0Zm-24.18,2.2c.5,5.57,.77,10.73,.66,16.58-.11,.75-.94,.93-1.49,1.22-.89,.17-2.03-.02-2.38-.52-1.27-2.15-.83-5.04-.94-7.65,.17-4.12,.11-8.58,1.22-12.41,.21-.56,.83-1.04,1.33-.7,1.33,.7,1.55,2.09,1.6,3.48h0Zm61.48-.81c.27,.47,.54,1.19,0,1.51-2.49,1.16-5.86,.64-8.74,.99-.77,.7-1.38,1.85-1.11,2.9,.28,.17,.53,.44,.83,.4,1.77,.12,4.43-.87,5.59,.87,.28,.52-.04,2.45-.83,2.49-2.16,.29-5.71-.28-6.75,.29-1.33,.93-1.22,2.72-1.72,4.18,.94,.64,1.93-.02,3.04-.17,2.05-.35,4.32-.99,6.36-.52,.39,.75,.94,1.57,.55,2.49-3.49,2.9-7.99,5.87-12.78,3.77-1.8-.85-2.6-3.71-1.99-6.14,.39-1.74,2.1-3.42,1.05-5.28-.17-.81,.28-1.51,.94-1.68,1.83,0,1.44-2.38,2.38-3.48-1.05-1.22-3.71-1.16-3.43-3.59,1.27-.7,2.82-.46,4.26-.7,3.26-.7,6.92-1.1,10.24-.7,.66,.14,1.55,1.51,2.1,2.38ZM50.23,13.82c5.11,4.37,11.73,11.83,10.9,20.41-1,6.78-7.86,11.89-13.67,13.51-5.64,1.74-12.73,1.57-18.48,.17-.39,1.1-.77,2.43-1.99,2.9-.77,.29-1.77,.12-2.38-.41-1.71-1.68-.33-4.93-2.82-5.97-4.87-2.15-10.13-6.38-12.62-11.6-.33-1.04,.06-2.09,.66-2.9,3.82-3.19,8.63-4.46,13.45-5.45,.28,.12,.17-.29,.39-.41,.28-3.48,.39-7.02,1.44-10.15,.24-.44,.83-.58,1.22-.29,3.04,2.43,1.6,7.02,2.93,10.32,5.81,.29,11.62,.58,16.21,4,1.55,1.33,1.93,3.88,1.44,5.33-.49,1.45-2.1,2.49-3.6,2.61-1,0-2.88,.1-2.77-.69,.11-.8,3.38-2.1,2.38-3.19-1.45-1.56-8.68-2.49-13.16-3.07-.55-.12-1.06,.06-1.06,.7-.11,4.41-.44,9.28,.28,13.51,.06,.29,.39,.64,.66,.69,7.91,1.33,16.27,.58,22.47-4.17,2.88-2.43,3.82-5.86,3.32-9.62-2.49-10.49-12.95-16.82-21.52-20.87C25.55,5.35,16.31,3.38,6.4,3.9c-1.58,.12-4.08,.69-4.09,1.28-.02,.58,2.83,.4,2.49,1.51-.34,1.11-3.24,.45-4.09,.17C-.16,6.59-.07,5.3,.15,4.48,2.31,.48,8.33,.16,11.05,.02c15.05-.41,29.6,5.6,39.18,13.8h0Zm-27.11,15.54c-3.82,.06-7.86,.46-11.4,1.85-.72,.29-1.61,1.1-1.05,2.09,1.44,2.03,3.5,3.69,5.42,4.87,1.93,1.17,4.48,2.67,6.81,3.02,.55-3.77,.55-7.48,.5-11.36-.22-.12,0-.35-.28-.46h0Zm114.37-5.28c-.17,5.04-4.65,8.18-4.65,13.22,.17,.17,.28,.41,.5,.29,3.6-4.12,7.14-9.97,12.4-11.71,1.39-.12,2.64,1.15,3.15,2.09,1.83,3.83,1.39,9.22-1.16,12.7-2.63,3.41-7.19,6.84-12.39,6.26-2.16,5.57-3.65,11.42-4.48,17.51-.44,1.22-1.49,.12-2.16-.12-4.48-3.71-.8-13.53-.5-14.79,.3-1.25,1.5-4.2,2.38-6.67-2.1-3.94-.78-8.7,.94-12.35,1.33-2.44,3.16-4.87,5.31-6.73,.27,0,.5,.06,.66,.29h0Zm8.91,6.26c-.66-.12-.94,.81-1.49,.99-2.54,3.02-5.09,6.03-6.36,9.62,1.72,.23,3.15-.93,4.65-1.57,2.54-1.68,4.15-4.46,3.98-7.65-.11-.52-.55-.93-.78-1.39h0Z" />
        </svg>
      </div>
      <div className="col-6 col-md-3 align-self-center text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="125" height="65" viewBox="0 0 125 65" fill="currentColor" className="text-dark mt-xl-5">
          <path d="M122.61,13.9c-1.32,0-2.4,1.13-2.4,2.52s1.07,2.52,2.4,2.52c1.32,0,2.39-1.13,2.39-2.52h0c0-1.4-1.07-2.52-2.39-2.52Zm0,4.74c-1.16,0-2.11-.99-2.11-2.22h0c0-1.23,.94-2.22,2.11-2.22h0c1.16,0,2.1,.99,2.1,2.21,0,1.22-.93,2.22-2.09,2.22h0Zm1.23-2.88c0-.24-.1-.49-.3-.61-.2-.13-.43-.14-.65-.14h-1.17v2.82h.33v-1.3h.6l.77,1.3h.39l-.81-1.3c.48-.01,.85-.22,.85-.77h0Zm-1.29,.5h-.5v-1h.77c.33,0,.7,.05,.7,.49,0,.57-.58,.51-.96,.51ZM42.33,58.01l-15.62-8.02c-.34-.19-.52-.66-.51-.98l.04-4.43c0-.31,.06-.63,.45-.93,1.67-1.12,6.84-4.13,12.19-12.33,7.12-10.93,0-20.1-11.12-17.61-9.88,2.22-19.94,7.85-24.3,10.9C-.43,27.34,.11,30.64,0,33.59c.22,1.25,.65,1.14,1.62-.11,7.24-7.04,18.25-12.38,20.3-13.29s6.91-3.98,12.64-2.61c5.5,1.31,4.16,9.17,2.48,12.49-1.84,3.63-7.07,8.92-9.45,10.22-.9,.5-1.24,0-1.24-.8l.38-17.1c0-1.14-.49-1.65-1.57-1.25l-1.73,.91c-1.19,.74-1.13,1.02-1.24,1.93l-.26,19.71c0,.43-.2,.77-.42,.87l-5.64,3.33c-1.3,.68-.97,1.7,0,2.05l4.54,2.27c1.08,.45,1.4,.79,1.4,1.93l-.16,9.54c4.05-.85,4.32-2.9,4.43-4.26v-2.9c.11-.68,.49-.91,1.03-.79l13.18,6.7c1.19,.57,1.84,.34,2.7-1.25,.86-1.59,.97-2.38-.65-3.18h0Zm23.02-24.07c-1.83,1.11-2.68,3.19-1.96,4.51,.72,1.31,2.9,1.53,4.73,.42,1.83-1.11,2.62-3.14,1.9-4.45-.72-1.31-2.84-1.59-4.68-.48Zm-6.76,1.41c-.5,.64-1.46,2.58-2,3.78-.54,1.19-1.67,3.89-2.81,3.89-1.2,0-1.35-3.12-1.35-4.26s-.65-1.31-.97-1.25-1.24,.4-1.51,1.59c-.27,1.19-1.73,6.36-3.35,6.36-1.03,0-1.78-3.12-1.84-4.09-.05-.96-.49-1.76-1.4-1.76-.65,0-1.46,.34-1.78,.74s-.38,1.02-2.11,.62c-1.57-.06-3.08,.8-4.91,4.03-1.11,1.95-2,5.58-.32,7.04,1.57,1.36,4.32-1.08,5.13-2.1,.81-1.02,1.51-1.76,1.84-2.33,.32-.57,.65-.51,.81,.06,.16,.57,1.08,2.78,2.27,2.73,1.19-.06,2.7-1.02,4.48-4.32,.32-.68,.81-.62,.92-.06,.11,.57,.81,2.44,2,2.44s2.4-1.89,3.02-3.01c.43-.77,1.08-.4,1.08,.34s-.32,18.17-.32,18.17c0,.79,.3,1.02,.84,1.02h2.35c.43,0,.81-.4,.81-1.02l.49-28.26c0-.68-.73-1.16-1.35-.37h0Zm-18.36,11.13c-.49,.85-1.78,3.12-2.92,2.73-.59-.34,.2-2.61,.59-3.41,.59-1.19,2.34-3.09,3.13-2.61,.76,.45-.32,2.44-.81,3.29h0ZM122.52,29.06c-.22,.2-.57,.54-1.35,.17-1.35-.57-1.46-3.24-2.16-5.68-.63-2.19-2.15-2.06-2.7-1.05l-1.65,2.78c-.3,.57-.94,1.87-1.59,1.87-.76,0-.42-1.14-.38-2.27,.03-.77-.43-1.73-1.19-1.73-.86,0-1.78,1.39-2.48,2.98-.49,1.11-1.76,5.37-3.35,5.37-1.03,0-1.13-3.12-1.19-4.09s-.38-2.16-1.3-2.16c-.62,0-1.03,.34-1.35,.74-.32,.4-.38,.74-1.51,.57-1.57-.06-4.16,1.48-5.99,4.71-1.11,1.95-2.44,6.04-.76,7.5,1.57,1.36,4.37-1.82,5.18-2.84,.81-1.02,1.51-1.76,1.84-2.33,.32-.57,.65-.51,.81,.06,.16,.57,1.08,2.78,2.27,2.73,1.19-.06,2.16-.34,3.94-3.64,.32-.68,.92-.77,1.03-.2s.22,2.07,1.35,2.07c1.94,0,4.15-4.97,4.7-6.13,.49-1.02,1.27-.74,1.54,.03,.39,1.1,.73,4.63,2.83,4.63s3.54-2.36,3.97-3.1c.49-.74,.23-1.68-.51-.99h0Zm-22.89,3.41c-.49,.85-1.57,2.73-2.7,2.33-.59-.34,.14-1.99,.54-2.78,.59-1.19,2.33-3.12,3.13-2.64,.75,.45-.49,2.24-.97,3.1h0Zm-10.43-2.98s-4.59-3.52-5.89-5.11c-.87-1.07-.27-1.87,.27-2.33,3.24-2.27,8.31-5.79,10.31-11.25,1.92-5.26-1.08-9.83-3.24-10.56-2.96-1.01-9.23,1.02-12.37,7.16-2.03,3.97-2.97,5.28-3.24,16.07-.05,2.04-.11,4.37-.11,6.93s-.27,9.48-.54,10.79c-1.03,3.07,2.05,1.25,3.46,.06,1.4-1.19,1.3-2.98,1.3-3.75,0-.97,.05-18,.54-21.81,.3-2.37,.65-6.76,3.02-10.56,2.38-3.81,4.81-2.27,5.45-1.65,.65,.62,1.57,2.22,1.08,5.45-.75,5.02-6.26,10.51-7.67,12.21-1.4,1.7-1.08,3.18-.27,4.37,.58,.85,2,2.5,3.46,4.03,1.46,1.53,1.3,2.9,1.08,3.92-.76,3.07-8.64,11.36-8.64,11.36-1.67,1.87,.05,4.94,.65,5.96,.6,1.02,1.35,.68,1.84-.17,1.94-3.8,10.31-13.01,10.31-13.01,2.43-3.24,1.41-6.36-.81-8.12h0Z" fill-rule="evenodd" />
        </svg>
      </div>
      <div className="col-6 col-md-3 align-self-center text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="125" height="65" viewBox="0 0 125 65" fill="currentColor" className="text-dark mt-xl-5">
          <path d="M67.37,.18c-.41,.05-.8,1.32-1.59,1.98-.58,.47-1.3,.45-1.68,1.03-.15,.22-.1,.59-.26,.95-.32,.72-1.46,.78-1.46,1.57,0,.85,.95,1.01,1.77,1.61,.64,.48,.7,.82,1.48,1.05,.66,.19,1.65-.43,2.54-.21,.73,.18,1.43,.31,1.6,.94,.14,.58-.01,1.48-.9,1.38-.3-.03-1.6-.39-3.19-.25-1.92,.18-4.11,.71-4.33,2.51-.12,1,1.36,2.19,2.79,1.95,.99-.16,.52-1.14,1.06-1.62,.7-.61,4.7,2.13,8.42,2.13,1.56,0,2.73-.33,3.89-1.35,.11-.08,.24-.24,.41-.25,.16,.01,.43,.14,.52,.2,2.99,2.02,5.26,6.08,16.26,6.12,1.55,0,3.31,.63,4.75,1.73,1.28,1,2.04,2.55,2.77,4.12,1.1,2.36,3.07,4.66,6.07,7.22,.16,.14,2.63,1.75,2.82,1.87,.03,.02,.21,.38,.15,.58-.07,1.53-.34,5.99,3.62,6.19,.96,.04,.71-.53,.71-.92,0-.78-.17-1.55,.32-2.34,.67-1.09-1.41-1.6-1.35-3.96,.05-1.76-1.72-1.46-2.61-2.8-.52-.78-.97-1.19-.94-2.14,.2-5.35-1.36-8.87-2.13-9.74-.61-.65-1.11-.91-.55-1.21,3.3-1.83,4.05-3.54,4.05-3.54,1.76-3.47,3.33-6.63,5.51-8.03,.44-.29,1.56-.99,2.25-1.27,2.03-.8,3.1-1.29,3.69-1.77,.93-.76,1.67-2.36,.78-3.32-1.11-1.19-3.04-.25-3.89,.18-6.07,3.03-6.96,8.36-9.07,11.43-1.68,2.45-4.4,4.25-6.84,4.4-1.83,.11-3.8-.2-5.76-.92-4.77-1.76-7.38-4.03-8-4.43-1.28-.83-11.23-9.04-19.29-9.37,0,0-1-1.68-1.25-1.71-.59-.06-1.19,1-1.62,1.13-.41,.11-1.09-1.16-1.5-1.1h0ZM31.88,49.16c-.76-.02-1.4-.54-1.4-1.19V26.85h-8.29v23.29c0,1.14,1.1,2.07,2.45,2.07h14.49c1.36,0,2.45-.93,2.45-2.07V26.85h-8.28v21.13c0,.65-.65,1.17-1.41,1.19Zm27.75-22.31h-12.54c-1.49,0-2.7,1.02-2.69,2.27h0v23.09h8.3V31.03c0-.65,.63-1.17,1.4-1.16h0c.77,0,1.4,.5,1.41,1.15v21.2h8.26V31.01c.01-.64,.63-1.15,1.41-1.15s1.4,.51,1.41,1.16v21.18h8.3V29.12c0-1.25-1.2-2.27-2.69-2.27h-12.55ZM16.66,45.84H8.28v6.37H0V26.85H16.71c1.5,0,2.66,1.02,2.66,2.28v14.42c0,1.26-1.21,2.28-2.71,2.29h-.01Zm-5.56-14.76c.01-.66-.62-1.2-1.4-1.21h-1.41v12.83h1.41c.73,0,1.41-.49,1.4-1.19v-10.43h0Zm95.93,18.13c0,1.72-1.64,3.12-3.68,3.12-2.04,0-3.7-1.39-3.71-3.11,0,0,0-.01,0-.02,0-1.7,1.65-3.12,3.65-3.12,2.09,0,3.74,1.38,3.74,3.12Zm-3.73-2.67c-1.67,0-3.06,1.21-3.06,2.67s1.4,2.67,3.11,2.67,3.09-1.2,3.09-2.67-1.38-2.67-3.09-2.67h-.05Zm1.79,4.47h-.99l-1.27-1.42v1.42h-.81v-3.6h.85c1.16,0,1.77,.37,1.77,1.07,0,.47-.36,.88-.87,1.01l-.06,.02,1.38,1.5h0Zm-2.12-2.01c.57,0,.88-.17,.88-.51,0-.31-.3-.46-.86-.46h-.17v.98h.14Zm-14.19,3.2v-6.37h-2.82v6.37h-8.28V29.12c0-1.26,1.21-2.27,2.69-2.27h13.99c1.49,0,2.7,1.02,2.7,2.27h0v23.09h-8.28Zm0-9.51v-11.68c-.02-.65-.64-1.14-1.41-1.14-.77,0-1.39,.52-1.41,1.16v11.66h2.82ZM.23,65v-6.97h.92v.65c.22-.26,.46-.45,.74-.58,.27-.13,.61-.19,1-.19,.51,0,.96,.11,1.35,.33,.39,.22,.69,.54,.89,.94,.2,.4,.3,.85,.3,1.33,0,.51-.11,.98-.33,1.39-.22,.41-.54,.73-.96,.95-.4,.21-.85,.33-1.32,.33-.34,0-.64-.06-.91-.18-.26-.11-.48-.27-.66-.46v2.45H.23Zm.92-4.42c0,.65,.16,1.13,.47,1.44,.31,.31,.69,.46,1.13,.46s.84-.16,1.16-.48c.32-.32,.48-.82,.48-1.49s-.16-1.12-.47-1.44c-.31-.32-.69-.48-1.13-.48s-.82,.17-1.15,.51c-.33,.34-.5,.84-.5,1.48h0Zm15.22,2.49v-.74c-.47,.57-1.1,.85-1.9,.85-.35,0-.68-.06-.99-.17-.31-.11-.53-.26-.68-.43-.16-.19-.27-.41-.31-.63-.04-.17-.06-.43-.06-.8v-3.12h1.02v2.79c0,.45,.02,.75,.06,.9,.07,.22,.2,.4,.41,.53,.21,.13,.46,.19,.77,.19s.59-.07,.86-.2c.27-.13,.46-.31,.57-.54,.11-.23,.17-.56,.17-.98v-2.7h1.02v5.04h-.91Zm8.28,0v-5.04h.91v.71c.19-.25,.45-.45,.75-.59,.31-.15,.67-.23,1.07-.23,.44,0,.81,.08,1.09,.23,.29,.16,.49,.37,.6,.65,.48-.59,1.09-.88,1.85-.88,.6,0,1.05,.14,1.37,.42,.32,.28,.48,.7,.48,1.28v3.46h-1.01v-3.17c0-.34-.03-.59-.1-.74-.07-.15-.19-.28-.36-.36-.18-.09-.4-.14-.61-.14-.42,0-.77,.12-1.05,.35-.28,.24-.42,.61-.42,1.13v2.93h-1.02v-3.27c0-.38-.08-.67-.25-.85-.17-.19-.44-.28-.81-.28-.29,0-.55,.06-.79,.19-.24,.13-.42,.31-.53,.55-.11,.24-.16,.59-.16,1.05v2.61h-1.02Zm19.32-.62c-.38,.27-.74,.46-1.09,.57-.36,.11-.74,.17-1.12,.17-.66,0-1.16-.13-1.52-.4-.35-.27-.53-.62-.53-1.04,0-.25,.07-.47,.2-.68,.13-.2,.31-.36,.52-.49,.22-.12,.46-.22,.73-.28,.3-.06,.6-.1,.9-.13,.82-.08,1.43-.18,1.81-.3,0-.12,0-.19,0-.22,0-.35-.1-.59-.29-.73-.26-.19-.65-.29-1.16-.29-.48,0-.83,.07-1.06,.21-.23,.14-.39,.39-.5,.75l-.99-.12c.09-.35,.24-.64,.45-.86,.21-.22,.51-.39,.9-.51,.39-.12,.84-.18,1.36-.18s.93,.05,1.25,.15c.32,.1,.56,.23,.71,.38,.15,.15,.25,.35,.32,.58,.03,.14,.05,.41,.05,.79v1.14c0,.79,.02,1.3,.07,1.51,.04,.21,.13,.41,.26,.61h-1.06c-.11-.19-.18-.41-.2-.62h0Zm-.09-1.91c-.37,.13-.92,.23-1.66,.32-.42,.05-.71,.11-.89,.17-.16,.06-.3,.15-.4,.28-.09,.12-.14,.25-.14,.4,0,.23,.1,.42,.31,.57,.2,.15,.5,.23,.9,.23s.74-.07,1.04-.21c.29-.13,.53-.34,.67-.59,.11-.19,.16-.48,.16-.85v-.31h0Zm8.67,2.53v-.97h1.16v.97h-1.16Zm12.62-1.85l1,.11c-.11,.58-.39,1.03-.84,1.36-.45,.33-1,.49-1.66,.49-.82,0-1.48-.22-1.98-.67-.5-.45-.75-1.1-.75-1.94,0-.54,.11-1.02,.32-1.43,.22-.41,.54-.71,.98-.92,.44-.2,.93-.31,1.43-.31,.65,0,1.19,.14,1.6,.42,.41,.28,.68,.67,.8,1.18l-.99,.13c-.1-.34-.26-.59-.5-.76-.24-.17-.53-.26-.87-.26-.51,0-.93,.15-1.25,.46-.32,.31-.48,.8-.48,1.46s.16,1.17,.46,1.48c.31,.31,.71,.46,1.21,.46,.4,0,.73-.1,1-.31,.27-.2,.44-.52,.51-.95h0Zm7.27-.67c0-.93,.31-1.62,.93-2.07,.52-.37,1.14-.56,1.88-.56,.83,0,1.5,.23,2.02,.68,.52,.45,.78,1.08,.78,1.88,0,.65-.12,1.16-.35,1.53-.23,.37-.58,.67-1.01,.87-.44,.21-.94,.31-1.45,.31-.84,0-1.52-.22-2.04-.68-.52-.45-.78-1.1-.78-1.95h0Zm1.05,0c0,.64,.17,1.13,.5,1.45,.33,.32,.76,.48,1.26,.48s.92-.16,1.26-.48c.33-.32,.5-.81,.5-1.48,0-.62-.17-1.1-.5-1.42-.34-.32-.76-.48-1.26-.48s-.93,.16-1.26,.48c-.34,.32-.5,.8-.5,1.45Zm11.54,2.52v-5.04h.91v.71c.19-.25,.45-.45,.75-.59,.31-.15,.67-.23,1.07-.23,.44,0,.81,.08,1.09,.23,.29,.16,.49,.37,.6,.65,.48-.59,1.09-.88,1.85-.88,.59,0,1.05,.14,1.37,.42,.32,.28,.48,.7,.48,1.28v3.46h-1.01v-3.17c0-.34-.03-.59-.1-.74-.07-.15-.19-.27-.36-.36-.18-.09-.39-.14-.61-.14-.42,0-.77,.12-1.05,.35-.28,.24-.42,.61-.42,1.13v2.93h-1.02v-3.27c0-.38-.08-.67-.25-.85-.17-.19-.44-.28-.81-.28-.29,0-.55,.06-.79,.19-.24,.13-.42,.31-.53,.55-.11,.24-.16,.59-.16,1.05v2.61h-1.02Z" />
        </svg>
      </div>
      <div className="col-6 col-md-3 align-self-center text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="currentColor" className="text-dark mt-xl-5">
          <path d="M32.5,0c17.9,0,32.5,14.6,32.5,32.5s-14.6,32.5-32.5,32.5S0,50.4,0,32.5,14.6,0,32.5,0h0Zm0,5.86c14.67,0,26.64,11.97,26.64,26.64s-11.97,26.64-26.64,26.64S5.86,47.17,5.86,32.5,17.83,5.86,32.5,5.86h0Zm15.61,44.09h-12.99V24.44h6.21v20.32h6.78v5.2Zm-15.48-16.37c0,4.65-3.1,7.18-7.53,7.18h-.91c-4.4,0-7.59-2.26-7.59-6.98V14.85h6.21v19.26c0,1.35,.54,2.02,1.62,2.02h.34c1.38,0,1.65-1.32,1.65-2.43V14.85h6.21v18.73h0Zm-11.67,12.39c0,2,1.63,3.62,3.62,3.62s3.62-1.63,3.62-3.62-1.61-3.62-3.62-3.62c-2,0-3.62,1.63-3.62,3.62h0Zm.68,0c0-1.71,1.33-3.07,2.94-3.07s2.94,1.37,2.94,3.07-1.3,3.07-2.94,3.07c-1.62,0-2.94-1.38-2.94-3.07Zm1.62,1.78h.67v-1.5h.55c.77,0,.79,.34,.8,.67,.02,.6,.01,.68,.13,.83h.69c-.14-.2-.11-.3-.14-.86-.02-.36-.05-.78-.52-.87v-.02c.54-.22,.61-.58,.61-.83,0-.94-.81-1.05-1.19-1.05h-1.61v3.62h0Zm.67-3.13h.7c.43,0,.74,.11,.74,.55,0,.26-.1,.58-.66,.58h-.78v-1.13h0Z" fill-rule="evenodd" />
        </svg>
      </div>
      <div className="col-6 col-md-3 align-self-center text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="65" viewBox="0 0 150 65" fill="currentColor" className="text-dark mt-xl-5">
          <path d="M76.42,3.33c-3.06,3.64-11.77,15.4-12.77,16.92-1.91,2.92-2.08,4.33-2.14,5.27-.06,.92-.06,2.59,1.5,3.95,2.61,2.25,6.26,1.88,9.51,1.88h26.72c1.14,0,1.48-.33,2.1-1.12,2.14-3.15,3.09-6.58,3.09-9.64,0-6.56-4.41-14.82-15.56-18.55l-1.26,1.74c8.85,4.06,12.51,9.37,12.51,16.79,.06,1.99-.49,4.15-1.84,6.14h-25.99c-1.56,0-1.78-1.7-1.22-2.66,2.23-3.83,4.71-7.52,7.44-11.03,2.63-3.39,5.21-6.56,7.93-9.87,.73-.92,.24-1.81-1.22-2.1-3.04-.62-6.21-1.05-10.05-1.05-21.32,0-29.12,11.83-29.12,20.6,0,9.51,7.86,20.54,29.18,20.54,11.83,0,19.58-3.68,24.06-8.41h-4.52c-3.92,3.5-10.65,5.98-19.54,5.98-18.06,0-24.71-9.8-24.71-18.24,.13-7.54,7.27-17.93,25.16-18.28,.68-.02,1.2,.58,.73,1.14h0Zm64.13,54.29c1.07,.15,1.89,.96,1.89,1.92,0,1.09-1.01,1.96-2.25,1.96h-22.91v-14.47h-6.75v14.51h-12.41c-3.36,0-4.05-1.97-4.05-3.79v-10.81h-11.19c-1.11,.72-2.18,1.52-3.32,2.19l-6.64,3.95-8.62-6.09h-13.43v3.64h4.86v-1.99l11.42,7.92-7.8,4.73h-8.48v3.64h9.81c1.05-.69,2.04-1.41,3.13-2.05l6.82-4,8.66,5.98h9.86l-13.03-9.47,6.69-4.22c1.43-.91,2.93-1.67,4.39-2.5v9.53c0,4.02,1.07,6.81,9.45,6.81l47.34-.11c3.66,.05,6-2.39,6-5.34s-2.7-5.35-6-5.35h-17.1c.23-2.01,2.02-3.69,3.84-3.69h17.31l-.05-3.5h-18.36c-5.81,0-10.46,4.66-10.59,10.07-.02,.38,.24,.62,.68,.62l20.83-.08h0Zm-89.68-.05v-3.71h3.34v3.71h-3.34Zm0-10.58h-12.68c-3.43,0-6.08,.87-8.02,2.35-3.51,2.68-4.63,5.51-4.59,6.78h4.57c-2.01,1.45-3.36,3.19-4.07,5.2H11.08c-2.7,0-4.44-1.85-4.44-3.64v-10.81H0v11.23c0,4.04,3.98,6.83,10.35,6.83H50.87v-3.64h-16.09c.08-1.85,2.12-3.71,3.97-3.71h12.11v-3.71h-16.28c-.22-1.09,1.88-3.22,3.49-3.22h12.79v-3.64h0Z" fill-rule="evenodd" />
        </svg>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Clients
