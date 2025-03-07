import { cameraEvents } from "./cameras.actions.js"
import { openIcon, exitIcon } from "./icons.actions.js"
import { handleNotesClick } from "./notes.actions.js"
import { changePhoneDate } from "./phone.date.js"
import { restartMeteorAnimation } from "./meteor.js"
import { incomingCall } from "./call.js"
import { newNotification } from "./toast.js"
import "./dial.actions.js"

//chat
import "./chat/create-emails.js"
import { Email } from "./chat/Email.js";
import { Profile } from "./chat/Profile.js"
import { writeEmail } from "./chat/emails.actions.js";

import './styles/index.css'
import './styles/screens.css'
import './styles/meteor.css'
import './styles/call.css'
import './styles/active-call.css'
import './styles/call.someone.css'
import './styles/chat.css'
import './styles/toast.css'
import './styles/small.tablets.css'
import './styles/others.css'

setInterval(changePhoneDate, 1000)
setInterval(restartMeteorAnimation, 20000)

openIcon()
exitIcon()
handleNotesClick()
cameraEvents()

// Desativa o botão direito do mouse
/* document.addEventListener('contextmenu', (ev) => ev.preventDefault()) */


let calls = [] // {key, value}
export let sentEmails = []
let receivedEmails = []
let notifications = []

/* Atualizando os arrays espelhos do LocalStorage */

export function updateStorageArrays() {
    calls = []
    sentEmails = []
    notifications = []
    receivedEmails = []
    for (let c = 1; c < localStorage.length; c++) {
        const key = localStorage.key(c - 1)
        if (key === `stalker-call_00${c}`) {
            calls.push({ key: key, value: localStorage.getItem(key) })
        } else if (key === `email_00${c}`) {
            sentEmails.push({ key: key, value: localStorage.getItem(key) })
        } else if (key === `notifications_00${c}`) {
            notifications.push({ key: key, value: localStorage.getItem(key) })
        } else if (key === `stalker-email_00${c}`) {
            receivedEmails.push({ key: key, value: localStorage.getItem(key) })
        }
    }
}



////////////////////// LIGAÇÕES //////////////////////////

/* EXEMPLO: */

/* KEY = call_number ...... VALUE = pending ou done */

// O LocalStorage é atualizado na função incomingCall passando a chave.


/* if (!localStorage.getItem('callKey')) { // Se a ligação não existir, ela será criada como pendente.
    localStorage.setItem('callKey', 'pending')
    updateStorageArrays()
}

if (localStorage.getItem('callKey') === 'pending') { // Se a ligação for pendente, ela ocorrerá.
    setTimeout(() => {
        incomingCall('voice', 'Desconhecido', '../midia/call/voz_placeholder.mp3', 'callKey')
    }, 1000 * 18)
} */

if (!localStorage.getItem('stalker-call_002')) {
    localStorage.setItem('stalker-call_002', 'pending')
} else if (localStorage.getItem('stalker-call_002') === 'ok') {
    call003()
}

if (localStorage.getItem('stalker-call_002') === 'pending') {
    setTimeout(() => {
        incomingCall('voice', 'Desconhecido', './midia/call/call002.mp3', 'stalker-call_002')

        const acceptCallFilling = document.querySelector('#accept-call-filling')
        acceptCallFilling.addEventListener('click', () => {
            call003()
        }, {once: true})
    }, 1000 * 25)
}

function call003() {
    if (!localStorage.getItem('stalker-call_003')) {
        localStorage.setItem('stalker-call_003', 'pending')
    } else if (localStorage.getItem('stalker-call_003') === 'ok') {
        call004()
    }

    if (localStorage.getItem('stalker-call_003') === 'pending') {
        setTimeout(() => {
            incomingCall('voice', 'Desconhecido', './midia/call/call003.mp3', 'stalker-call_003')

            const acceptCallFilling = document.querySelector('#accept-call-filling')
            acceptCallFilling.addEventListener('click', () => {
                call004()
            }, {once: true})
        }, 1000 * 65)
    }
}

function call004() {
    if (!localStorage.getItem('stalker-call_004')) {
        localStorage.setItem('stalker-call_004', 'pending')
    } else {
        notifications007()
    }

    if (localStorage.getItem('stalker-call_004') === 'pending') {
        setTimeout(() => {
            incomingCall('voice', 'Desconhecido', './midia/call/call004.mp3', 'stalker-call_004')
            notifications007()
        }, 1000 * 45)
    }
}

////////////////////// NOTIFICAÇÕES //////////////////////////

//

if (!localStorage.getItem('notifications_006')) {
    localStorage.setItem('notifications_006', 'pending')
}

if (localStorage.getItem('notifications_006') === 'pending') {
    document.body.addEventListener('click', () => {
        newNotification('Você recebeu uma nova mensagem de James Wilson!')
        newNotification('Você recebeu uma nova mensagem de Hacker!')
        localStorage.setItem('notifications_006', 'ok')
    }, { once: true })

}

//

function notifications007() {
    if (!localStorage.getItem('notifications_007')) {
        localStorage.setItem('notifications_007', 'pending')
    }
    
    if (localStorage.getItem('notifications_007') === 'pending') {
        setTimeout(() => {
            newNotification('Você tem novas mensagens de desconhecido!')
            localStorage.setItem('notifications_007', 'ok')
        }, 1000 * 35)
    }
}



////////////////////// EMAILS ENVIADOS //////////////////////////

// Criar envio de Email (só pode haver um email por vez)
// O LocalStorage é atualizado na função writeEmail passando a chave.

/* if (!localStorage.getItem('email_001')) {  
    localStorage.setItem('email_001', 'pending')
    updateStorageArrays()
}
 
if (localStorage.getItem('email_001') === 'pending' && localStorage.getItem('stalker-email_003') === 'ok') {
    const writedEmail = new Email('sent', 'Quem é você???', ['Me deixa em paz! O que eu te fiz??'])
    const writeEmailIcon = document.querySelector('#escrever-email')
    writeEmailIcon.addEventListener('click', () => {
        writeEmail(writedEmail.subject, writedEmail.content, writedEmail.attachment, Profile.profiles.stalker, 'email_001')
    }, { once: true })
}   */













