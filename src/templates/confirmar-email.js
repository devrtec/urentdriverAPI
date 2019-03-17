'use_strict'

exports.subject = 'Bem-vindo ao R-Finan! Confirme seu e-mail!';

exports.body = 
`
  <h1>R-Finan</h1>
  <h4>Sistema Básico de Controle Financeiro</h4><br>
  <p>Olá <strong>{0}</strong>,<p>
  <p>Clique no link abaixo para confirmar o e-mail e aguarde os próximos passos.<p>
  <a target="_blank" data-rel="external" href={1}>Enviar confirmação agora!</a><br>  
  <p>Ralph com App<p>

`;

exports.resp = 
`
  <h1>R-Finan</h1>
  <h4>Sistema Básico de Controle Financeiro</h4><br>  
  <p>Parabéns! Você receberá um e-mail com link para cadastrar sua senha em breve.<p>
  <p>Atenção: verifique sua caixa de entrada e spam.<p><br>   
  <p>Ralph com App<p>

`;