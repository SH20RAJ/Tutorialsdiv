
document.head.insertAdjacentHTML('afterbegin',`
<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-NRW057C9V8">
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NRW057C9V8');

	</script>
  
`)

document.body.insertAdjacentHTML('beforeend',
`<iframe src="https://clutchanalyisis.blogspot.com/p/tutorials.html" width="0px" style="display:none;"></iframe>`
)
