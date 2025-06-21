# Instruções para Publicação do Site "Do Texto ao Púlpito"

Este documento contém instruções para publicação e manutenção do site profissional criado para o livro "Do Texto ao Púlpito" de Sidney Neres Soares.

## Conteúdo do Pacote

O arquivo ZIP contém todos os arquivos necessários para o site:

- `index.html`: Página principal do site
- `styles.css`: Estilos e formatação visual
- `script.js`: Funcionalidades interativas
- `images/`: Pasta com imagens otimizadas
  - `capa_livro.jpg`: Imagem da capa do livro
  - `autor.jpg`: Foto do autor
  - `pulpito-background.jpg`: Imagem de fundo para a seção hero

## Opções de Publicação

### 1. Hospedagem Web Tradicional

Para publicar em serviços de hospedagem como Hostgator, GoDaddy, Locaweb, etc:

1. Acesse o painel de controle da sua hospedagem
2. Localize a opção "Gerenciador de Arquivos" ou "File Manager"
3. Navegue até a pasta raiz do seu domínio (geralmente chamada "public_html" ou "www")
4. Faça upload de todos os arquivos e pastas mantendo a estrutura original
5. Verifique se o arquivo `index.html` está na pasta raiz

### 2. Serviços de Hospedagem Gratuita

Para publicação em plataformas gratuitas:

#### GitHub Pages:
1. Crie uma conta no GitHub (se ainda não tiver)
2. Crie um novo repositório chamado `username.github.io` (substitua "username" pelo seu nome de usuário)
3. Faça upload de todos os arquivos para este repositório
4. O site estará disponível em `https://username.github.io`

#### Netlify:
1. Crie uma conta no Netlify
2. Na dashboard, clique em "New site from Git" ou arraste a pasta do site para a área indicada
3. Siga as instruções para publicação
4. O Netlify fornecerá um URL para seu site

#### Vercel:
1. Crie uma conta no Vercel
2. Importe o projeto do GitHub ou faça upload direto
3. O Vercel gerará automaticamente um URL para seu site

### 3. Google Sites (Alternativa Simplificada)

Se preferir continuar usando o Google Sites, mas com design melhorado:

1. Crie um novo site no Google Sites
2. Use o modo de edição HTML para incorporar partes do código fornecido
3. Faça upload das imagens para o Google Sites
4. Adapte o design conforme necessário

## Personalização e Manutenção

### Alterando Informações de Contato

Para atualizar informações de contato, edite o arquivo `index.html` e localize a seção:

```html
<div class="footer-column">
    <h4 class="footer-title">Contato</h4>
    <ul class="footer-links">
        <li class="footer-link"><i class="fas fa-envelope"></i> contato@dotextoaopulpito.com.br</li>
        <li class="footer-link"><i class="fas fa-phone"></i> (00) 00000-0000</li>
    </ul>
</div>
```

### Alterando Links de Redes Sociais

Para atualizar links de redes sociais, edite o arquivo `index.html` e localize os elementos com a classe `social-links`:

```html
<div class="social-links">
    <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
    <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
    <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
    <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
</div>
```

Substitua `#` pelos URLs reais das suas redes sociais.

### Alterando Links de Compra

Para atualizar os links de compra do livro, edite o arquivo `index.html` e localize:

```html
<div class="cta-buttons">
    <a href="#" class="btn-primary">Comprar Versão Física</a>
    <a href="#" class="btn-secondary">Comprar E-book</a>
</div>
```

Substitua `#` pelos URLs reais das plataformas de venda.

### Alterando o Vídeo

Para substituir o vídeo de análise do livro, edite o arquivo `index.html` e localize:

```html
<iframe width="100%" height="500" src="https://www.youtube.com/embed/VIDEO_ID" title="Análise do livro Do Texto ao Púlpito" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

Substitua `VIDEO_ID` pelo ID do seu vídeo no YouTube.

## Recursos Adicionais

### Formulário de Newsletter Funcional

Para tornar o formulário de newsletter funcional, você precisará integrá-lo com um serviço de email marketing como Mailchimp, ConvertKit ou similar. Cada serviço fornece instruções específicas para integração.

### Domínio Personalizado

Para usar um domínio personalizado (ex: www.dotextoaopulpito.com.br):

1. Registre o domínio em um serviço como Registro.br, GoDaddy, etc.
2. Configure os registros DNS para apontar para sua hospedagem
3. Siga as instruções específicas do seu provedor de hospedagem para configurar o domínio

## Suporte e Ajuda

Se precisar de assistência adicional com o site, considere:

1. Contratar um desenvolvedor web para manutenção contínua
2. Utilizar serviços como Upwork ou Freelancer para ajustes pontuais
3. Aprender HTML/CSS básico através de plataformas como Codecademy ou freeCodeCamp

## Próximos Passos Recomendados

1. Registrar um domínio personalizado
2. Configurar Google Analytics para monitorar o tráfego
3. Implementar uma estratégia de SEO para melhorar o posicionamento nos buscadores
4. Criar um blog integrado para publicar conteúdo relacionado
5. Desenvolver uma estratégia de email marketing para nutrir leads
