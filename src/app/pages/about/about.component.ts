import { Component } from '@angular/core';
import { FaqStructure } from '../../models/faq';
import { InViewDirective } from '../../directives/in-view.directive';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [InViewDirective, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  faqData: FaqStructure[];

  constructor(){
    this.faqData = [
      {
        id: 1,
        title: "How can I track my order?",
        body: "Once your order is shipped, you’ll receive a confirmation email with a tracking number. Use this number to monitor your package's progress."
      },
      {
        id: 2,
        title: "What payment methods do you accept?",
        body: "We accept major credit cards, PayPal, and other popular payment gateways to ensure your shopping experience is secure and flexible."
      },
      {
        id: 3,
        title: "How can I contact customer support?",
        body: "Our friendly customer support team is here to help! Reach out to us via email at support@doten.com or use the contact form on our website."
      }
    ]
  }
}
