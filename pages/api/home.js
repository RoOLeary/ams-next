// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
      homeContent: [
        {
            "locale": "en",
            "title": "Algarve Music Series",
            "content": `Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table  salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn
            Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table  salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn`,
            "editionDetails": '8th Edition | October 2023 Schedule Coming Soon!',
            "comingSoon": 'Schedule Coming Soon!'
        },
        {
            "locale": "pt",
            "title": "Série de Música do Algarve",
            "content": "O Algarve Music Series é um ciclo de concertos com já 5 anos de existência, com base na região do Algarve. Com foco sobretudo na música de câmara, caracteriza-se por uma programação cuidada, uma relação próxima com o público e elevada qualidade dos artistas intervenientes (nacionais e internacionais).",
            "editionDetails": '8ª Edição | Outubro 2023',
            "comingSoon": 'Programação em breve!'
        }
    ]})
}
