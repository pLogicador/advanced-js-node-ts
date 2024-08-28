const exampleText = `
João brought flowers to his beloved on January 10, 1970,
Maria was her name. It was an excellent year in João's life. He had 5 children, all adults now.
Maria, today his wife, still made that coffee with cheese bread on Sunday afternoons.
And of course! Being a good "mineira" that she is, she never forgets her famous cheese bread.
I can't get tired of hearing Maria: "Jooooooããooooo, the coffee is ready. Come!".
`;

const files = [
    'Attention.jpg',
    'PHOTO.jpg',
    'My cat.jpg',
    'My cat.JPG',
    'My cat.JPEG',
    'My cat.JPEeeeG',
    'Husband.png',
    'Shopping list.txt'
];

const html = '<p>Hello world!</p> <p>Hello again!</p>';
const html2 = `<p 
data-teste='teste' 
class="teste teste">
  Olá mundo
</p> <p>Olá mundo</p> <div>Sou a div</div>`;

const alfabeto = 'ABCDEFGHIJKLMNOPQRSUVWYZ ãáéÂâ abcdefghijklmnopqrstuvwyz @; 01234 56789 ;';

const cpfs = ` 
    The CPFs are:
    254.224.877-45 215.978.456-12 047.258.369-96 

    963.987.321-00

    963.987.32a.00 (NOT VALID)
    963.987.32-00 (NOT VALID)
`;

const cpfs2 = `254.224.877-45
215.978.456-12
047.258.369-96
963.987.32a.00`;

const ips = `

The IPs are:
   0.0.0.0

   192.168.0.25

        10.10.5.12

        10.01.10.20 (NOT VALID)
        10.021.08.20 (NOT VALID)

   255.255.255.255

`;

const lookahead = `
ONLINE  192.168.0.1 ABCDEF inactive
OFFLINE  192.168.0.2 ABCDEF active
ONLINE  192.168.0.3 ABCDEF active
ONLINE  192.168.0.4 ABCDEF active
OFFLINE  192.168.0.5 ABCDEF active
OFFLINE  192.168.0.6 ABCDEF inactive
`;

module.exports = {
    exampleText, files, html, html2, alfabeto, cpfs, ips, cpfs2, lookahead
};
