import { Profile } from "./Profile.js";

// Criar emails Recebidos

const hacker = new Profile('hacker', './midia/chat/profiles/perfil_hacker.svg')
hacker.newEmail('received', 'Bem vindo ao novo começo.', ['Com o seu endereço IP, garanti que apenas você tenha acesso a este local. A partir deste momento, tudo o que você fizer, ligações, pesquisas, e qualquer outra coisa será redirecionado para este domínio.', 'Não espero um agradecimento agora, só espero que você não faça nenhuma besteira ou nós dois estaremos comprometidos. Aqui, apenas você e eu saberemos o que está acontecendo. Mas lembre-se: nada é por acaso. O sigilo é a única coisa que mantém tudo seguro. Até quando? Só o tempo dirá.', 'Não confia em mim? Não se preocupe, a sensação é recíproca. Eu tenho meus próprios interesses, e você tem os seus, espero que não se esqueça disso. No final, não estou aqui para ser seu amigo, mas para garantir que você faça o que é necessário, sem se perder no caminho.', 'Não me importa o que você pense, só sei que você vai fazer o que for preciso. O que você acha disso? Está pronto para ver o que está além do que os seus olhos podem enxergar? Prestar atenção nos detalhes faz diferença.', 'Sei que você tem a capacidade. Só espero que seja suficiente para enfrentar o que vem pela frente.'], './midia/chat/archives/Billy_base64.txt')


const stalker = new Profile('stalker', './midia/chat/profiles/perfil_stalker.svg')

/* const eyes = new Profile('eyes', '../midia/chat/profiles/perfil_eye.svg')
eyes.newEmail('received', '👁️', ['Ele não é maravilhoso?'])   */


////////////////////// LOCAL STORAGE //////////////////////////

//stalker-email_001

stalker.newEmail('received', '', ['Oi, por que você está fugindo de mim? Só quero conversar.'])

//stalker-email_002

stalker.newEmail('received', '', ['Por que você fez isso? Por que escondeu ele de mim? Me diga.'])

//stalker-email_003

if (!localStorage.getItem('stalker-email_003')) {
    localStorage.setItem('stalker-email_003', 'pending')
} else {
    stalker.newEmail('received', '', ['Eu estava lá.'])
}

if (localStorage.getItem('stalker-email_003') === 'pending') {
    setTimeout(() => {
        stalker.newEmail('received', '', ['Eu estava lá.'])
        localStorage.setItem('stalker-email_003', 'ok')
        stalker.selectProfile()
    }, 1000 * 60)  
} 

//stalker-email_004

if (!localStorage.getItem('stalker-email_004')) {
    localStorage.setItem('stalker-email_004', 'pending')
} else {
    stalker.newEmail('received', '', [''], './midia/chat/archives/iseeyou.mp4')
}

if (localStorage.getItem('stalker-email_004') === 'pending') {
    setTimeout(() => {
        stalker.newEmail('received', '', [''], './midia/chat/archives/iseeyou.mp4')
        localStorage.setItem('stalker-email_004', 'ok')
        stalker.selectProfile()
    }, 1000 * 68)  
}