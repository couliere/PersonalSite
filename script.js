// Header buttons and logo
const mainLogo = document.getElementById('mainLogo')
const aboutBtn = document.getElementById('aboutBtn')
const projectsBtn = document.getElementById('projectsBtn')
const experienceBtn = document.getElementById('experienceBtn')
const referenceBtn = document.getElementById('referenceBtn')
const contactBtn = document.getElementById('contactBtn')

// Site section bodies
const mainSection = document.getElementById('mainSection')
const aboutSection = document.getElementById('aboutSection')
const projectsSection = document.getElementById('projectsSection')
const experienceSection = document.getElementById('experienceSection')
const referenceSection = document.getElementById('referenceSection')
const contactSection = document.getElementById('contactSection')

// default page
let currentSection = contactSection

const sectionChange = (changeTo) => {
  currentSection.hidden = true
  currentSection = changeTo
  currentSection.hidden = false
}
sectionChange(currentSection)

mainLogo.addEventListener('click', () => sectionChange(mainSection))
aboutBtn.addEventListener('click', () => sectionChange(aboutSection))
projectsBtn.addEventListener('click', () => sectionChange(projectsSection))
experienceBtn.addEventListener('click', () => sectionChange(experienceSection))
referenceBtn.addEventListener('click', () => sectionChange(referenceSection))
contactBtn.addEventListener('click', () => sectionChange(contactSection))

// Contact Form
const contactForm = document.getElementById('contactForm')
const formName = document.getElementById('formName')
const formEmail = document.getElementById('formEmail')
const formPhone = document.getElementById('formPhone')
const formRequest = document.getElementById('formRequest')

const submitForm = (e) => {
  e.preventDefault()
  const toSend =
  `**Name:** ${formName.value}
**Email:** ${formEmail.value}
**Phone:** ${formPhone.value}
**Request:** ${formRequest.value}`
  
  const request = new XMLHttpRequest()
  
  // test-room
  //request.open("POST", "https://discord.com/api/webhooks/902655050361479338/HvBalaSY3w2OWxtk4c7fyxhczl30RS-USvRHbvkZSWObo-j82cSEJpLxRT9HkzuudIZu")
  // discord notification
  request.open("POST", "https://discord.com/api/webhooks/902587515385544764/tuq_mGGLQaUAjnS7QH_5S2aUDIgekOUXJjAvrmJOvf14kfgclTW3oH6CRxYCIdcz2G24")
  request.setRequestHeader('Content-type', 'application/json')
  
  const params = {
    username: "New Contact Request",
    content: toSend
  }
  request.send(JSON.stringify(params))
  contactForm.reset()
}

contactForm.addEventListener('submit', submitForm)
