# CASE DP6

## Sumário
        1. Visao Geral
        2. Arquivos HTML
        3. tagueamento.js
        4. Execução
        5. Agradecimentos e ressalvas

### 1. Visao Geral
Este projeto é uma implementação do google analytics em um site estático. O projeto tem como objetivo capturar interações de usuários nos elementos das páginas do site.

### 2. Arquivos HTML
Todos os arquivos HTML receberam o seguinte código no começo da tag <head>:

<code>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-PD9PQ7TGTC"></script>
  <script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	  
    gtag('config', 'UA-12345-6');
  </script>
<!-- Google Analytics -->
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-12345-6', 'auto');
    ga('send', 'pageview');
  </script>
<!-- End Google Analytics -->  
</code>

O código carrega a gtag e o objeto ga para envio dos eventos para a propriedade UA-12345-6. A implementação foi feito no inicio da tag <head>
por recomendação da Google de carregar esses componentes o quanto antes na página web.

### 3. tagueamento.js
Com exceção do evento de exibição do pop-up, todos os outros eventos foram implementados nesse arquivo js. 

#### Pontos importantes
1. Eventos de todas as páginas<br/>
       descrição: Estes eventos foram implementados fora dos blocos de código if (location.pathname == pathname) pois estao presentes em todas as páginas<br/>
       tipo_evento: Foi adicionado um evento do tipo "click" para executar o envio do evento pelo objeto ga sempre que o elemento for clicado<br/>

2. analise.html<br/>
   descrição: Os elementos dessa pagina foram inseridos em um array e seus eventos criados dinâmicamente com um foreach onde o rotulo que é dinâmico recebe valor de item.querySelector('.card-title').innerText.<br/>
   tipo_evento: Foi adicionado um evento do tipo "click" para executar o envio do evento pelo objeto ga sempre que o elemento for clicado<br/>

3. sobre.html<br/>
   descrição: Os elementos dessa pagina foram inseridos em um array e seus eventos criados dinâmicamente com um foreach onde o rotulo que é dinâmico recebe valor de item.id (com exceção do evento do popup)<br/>
   tipo_evento: Foi adicionado um evento do tipo "change" para executar o envio do evento pelo objeto ga, o "change" atende ao solicitado pois é ativado no momento que o elemento perde o foco (ou seja, quando o usuario termina de digitar e troca o input)<br/>
	   
4. sobre.html evento popup<br/>
   descrição: Esse evento foi inserido no arquivo main.js após a inserção da classe 'lightbox-open' no body da página. Optei por fazer dessa forma, porque a outra opção que tinha pensado era em por um evento no butao do form do tipo "submit", só que o submit trigga antes do pop aparecer o que não condiz com a regra de negócio.<br/>
   tipo_evento: hard-coding, trigga com o submit do form após inserir a classe de visualização do pop-up<br/>
    


### 4. Execução

#### Para executar o site abra um prompt na raiz do diretório e escreva:
<code> python -m html.server 5000 </code>
O site será executado na porta 5000 e você pode acessar com localhost:5000

### 5. Agradecimentos e ressalvas

## Agradeço a toda equipe da DP6 pela participação do processo seletivo e a execução desse case. Nunca tinha atuado com google analytics e tenho uma experiência bem pontual com javascript, adorei a vivência de fazer essa implementação e se possível gostaria de um feedback de como implementar o evento do popup de uma forma mais elegante.

### Abraços!
