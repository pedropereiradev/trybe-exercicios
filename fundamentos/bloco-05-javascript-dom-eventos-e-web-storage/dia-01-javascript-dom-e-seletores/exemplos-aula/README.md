# Exercícios realizados durante aula assíncrona para fixação do conteúdo

### Seletores de elementos.
~~~javascript
<!DOCTYPE html>
<html>
  <body>
    <header>
      <h2 id="page-title">Título</h2>
      <p id="paragraph">Dê uma cor para este parágrafo!</p>
      <h4 id="subtitle">Subtítulo</h4>
      <p id="second-paragraph">Segundo parágrafo!</p>
    </header>
    <script>
      const paragraph = document.getElementById("paragraph");
      paragraph.style.color = "red";
    </script>
  </body>
</html>
~~~

1. Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
2. Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
3. Por fim, recupere o subtítulo e altere-o também.

### Manipulação de elementos

##### Arquivos index, style e script
Neste exercício foi disponibilizado o código HTML e CSS, porém foi utilizado JavaScript para estilizar a página.
