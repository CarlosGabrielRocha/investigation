import { Profile } from "./Profile.js";

// Criar emails Recebidos

// Hacker

const hacker = new Profile('hacker', './midia/chat/profiles/perfil_hacker.svg')
hacker.newEmail('received', 'Bem vindo ao novo começo.', ['Com o seu endereço IP, garanti que apenas você tenha acesso a este local. A partir deste momento, tudo o que você fizer, ligações, pesquisas, e qualquer outra coisa será redirecionado para este domínio.', 'Não espero um agradecimento agora, só espero que você não faça nenhuma besteira ou nós dois estaremos comprometidos. Aqui, apenas você e eu saberemos o que está acontecendo. Mas lembre-se: nada é por acaso. O sigilo é a única coisa que mantém tudo seguro. Até quando? Só o tempo dirá.', 'Não confia em mim? Não se preocupe, a sensação é recíproca. Eu tenho meus próprios interesses, e você tem os seus, espero que não se esqueça disso. No final, não estou aqui para ser seu amigo, mas para garantir que você faça o que é necessário, sem se perder no caminho.', 'Não me importa o que você pense, só sei que você vai fazer o que for preciso. O que você acha disso? Está pronto para ver o que está além do que os seus olhos podem enxergar? Prestar atenção nos detalhes faz diferença.', 'Sei que você tem a capacidade. Só espero que seja suficiente para enfrentar o que vem pela frente.'], './midia/chat/archives/Billy_base64.txt')

hacker.newEmail('received', 'Eu avisei', ['Acredita em mim agora? Me agradeça depois.'])

// Stalker

const stalker = new Profile('stalker', './midia/chat/profiles/perfil_stalker.svg')

/* const eyes = new Profile('eyes', '../midia/chat/profiles/perfil_eye.svg')
eyes.newEmail('received', '👁️', ['Ele não é maravilhoso?'])   */


////////////////////// LOCAL STORAGE //////////////////////////

//stalker-email_001

stalker.newEmail('received', '', ['Oi, por que você está fugindo de mim? Só quero conversar.'])

//stalker-email_002

stalker.newEmail('received', '', ['Por que você fez isso? Por que escondeu ele de mim? Me diga.'])

//stalker-email_003

stalker.newEmail('received', '', ['Eu estava lá.'])

//stalker-email_004

/* stalker.newEmail('received', '', [''], './midia/chat/archives/iseeyou.mp4') */

//starker-email_005

if (!localStorage.getItem('stalker-email_005')) {
    localStorage.setItem('stalker-email_005', 'pending')
} else {
    stalker.newEmail('received', 'Por ter o escondido', ['Você pagará por isso.'])
}

if (localStorage.getItem('stalker-email_005') === 'pending') {
    setTimeout(() => {
        stalker.newEmail('received', 'Por ter o escondido', ['Você pagará por isso.'])
        localStorage.setItem('stalker-email_005', 'ok')
        stalker.selectProfile()
    }, 1000 * 140)  
}

// James Wilson

const jamesWilson = new Profile('James Wilson', './midia/chat/profiles/perfil_james.svg')

jamesWilson.newEmail('received', 'Notificação de Investigação', ['Prezado investigado', 'Meu nome é James Wilson, perito criminal responsável pelo caso mais intrigante e repercutido do país desde 2008: o desaparecimento da menina Elisabeth Eyes.', 'Estou entrando em contato pois, após uma análise preliminar, surgiram indícios que colocam o senhor como um dos suspeitos neste caso, devido à sua proximidade com o pai da menina, sr Adam Eyes, nosso principal foco de investigação até o presente momento.', 'Este comunicado tem como objetivo informá-lo formalmente sobre o início de uma investigação que envolve sua pessoa. A partir deste ponto, recomendamos que mantenha discrição absoluta. Qualquer violação desse sigilo pode complicar sua situação e afetar o andamento das investigações.', 'Permaneça atento. Novas instruções serão enviadas em breve.', 'Atenciosamente,', 'James Wilson.'])
