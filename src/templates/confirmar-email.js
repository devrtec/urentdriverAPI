'use_strict'

exports.subject = 'Bem-vindo ao URentDriver! Confirme seu e-mail!';

exports.body = 
`
  <h1>URentDriver</h1>
  <h4>Procurando um motorista Uber para o seu carro? Ou um carro Uber para trabalhar? </h4><br>
  <p>Olá <strong>{0}</strong>,<p>
  <p>Clique no link abaixo para confirmar o e-mail e aguarde os próximos passos.<p>
  <a target="_blank" data-rel="external" href={1}>Enviar confirmação agora!</a><br> 
  <p>Atenção: verifique sempre sua caixa de entrada e spam.<p><br>    
  <p>DevRTec<p>

`;

exports.resp = 
`
  <h1>URentDriver</h1>
  <h4>Procurando um motorista Uber para o seu carro? Ou um carro Uber para trabalhar? </h4><br>  
  <p>Parabéns! Você já está ativo no aplicativo.<p>
  <p>Atenção: verifique sempre sua caixa de entrada e spam.<p><br>   
  <p>DevRTec<p>

`;