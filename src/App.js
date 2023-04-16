import './reset.css';
import './App.css';
import $ from 'jquery'; 

function App() {

  $(function(){
    const menu = $('#top_menu > ul > li');
    const contents = $('#contents > div');
    
    menu.click(function(event){
        event.preventDefault();
        
        const tg = $(this);
        const i = tg.index();
        
        const section = contents.eq(i);
        const tt = section.offset().top;
        
        $('html, body').stop().animate({scrollTop:tt});
     });

     $(window).scroll(function(){
      const sct = $(window).scrollTop();
      contents.each(function(){
          const tg1 = $(this);
          const i = tg1.index();
           if(tg1.offset().top <= sct){
               menu.removeClass('on');
               menu.eq(i).addClass('on');
           };
           
       });

   });




});

  return (
    <div className="wrap">
			<div id="top_menu">
					
				<div id="logo">
					<a href="#home"><img src="img/logoPaper.png" alt="Paper" /></a>
				</div>
				<ul>
					<li className="on"><a href="#paper">paper</a></li>
					<li><a href="#works">works</a></li>
					<li><a href="#email">email</a></li>
				</ul>
					
			</div>
			<div id="contents">
				<div id="paper"><img src="img/paper.jpg" alt="paper" /></div>
				<div id="works"><img src="img/work.jpg" alt="works" /></div>
				<div id="email"><img src="img/email.jpg" alt="email" /></div>
			</div>
		</div>
  );
}

export default App;
