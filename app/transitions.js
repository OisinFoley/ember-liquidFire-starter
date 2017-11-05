export default function(){
  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );

    this.transition(
      this.fromRoute('index'),
      this.use('toLeft'),
      this.reverse('toRight')
    );
}



// with liquid fire installed from cli(remembering to have restarted)
//		use the examples in videos or from the docs
//			ensure to use *liquid-outlet* for rendering in your templates --> it's an essentials