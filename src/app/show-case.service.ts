import { Injectable } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { NewsShowcase } from './newsModel';

@Injectable({
  providedIn: 'root'
})
export class ShowCaseService {
  newsShowCase:NewsShowcase[]=[{
    publisher:"NDTV",
    isFollow : false,
    reference:[{
      topic:"Maharashtra Politics",
      title : "Was My Idea, Says Devendra Fadnavis On Eknath Shinde For Chief Minister",
      image : "assets/maharashtra.jpeg",
      url:"https://www.ndtv.com/india-news/eknath-shinde-made-cm-on-my-proposal-to-party-leaders-devendra-fadnavis-3129952?utm_source=newsshowcase&utm_medium=gnews&utm_campaign=CDAqEAgAKgcICjCPyf8KMMit-QIwjatc&utm_content=rundown"
    },{
      topic:"Judged Vs Judges",
      title : "For Supreme Court Judges, A New Controversy Over Nupur Sharma Criticism",
      image : "assets/sharma.jpeg",
      url:"ndtv.com/india-news/outrageous-supreme-courts-observations-on-nupur-sharma-come-under-fire-from-from-judges-bureaucrats-veterans-3128597?utm_source=newsshowcase&utm_medium=gnews&utm_campaign=CDAqEAgAKgcICjCPyf8KMMit-QIwjatc&utm_content=rundown"
    },{
      topic:"Mumbai Rain",
      title : "Mumbai On Alert For Heavy Rain, Is Already Waterlogged",
      image : "assets/mumbai.jpg",
      url:"https://www.ndtv.com/mumbai-news/heavy-rains-lash-mumbai-and-suburbs-waterlogging-in-some-areas-3128017?utm_source=newsshowcase&utm_medium=gnews&utm_campaign=CDAqEAgAKgcICjCPyf8KMMit-QIwjatc&utm_content=rundown"
  }],
  time : "12 minutes ago"
},{
    publisher:"The Hindu",
    isFollow : false,
    reference:[{
      topic:"Maharashtra Politics",
      title : "Was My Idea, Says Devendra Fadnavis On Eknath Shinde For Chief Minister",
      image : "assets/maharashtra.jpeg",
      url:"https://www.ndtv.com/india-news/eknath-shinde-made-cm-on-my-proposal-to-party-leaders-devendra-fadnavis-3129952?utm_source=newsshowcase&utm_medium=gnews&utm_campaign=CDAqEAgAKgcICjCPyf8KMMit-QIwjatc&utm_content=rundown"
    },{
      topic:"Judged Vs Judges",
      title : "For Supreme Court Judges, A New Controversy Over Nupur Sharma Criticism",
      image : "assets/sharma.jpeg",
      url:"ndtv.com/india-news/outrageous-supreme-courts-observations-on-nupur-sharma-come-under-fire-from-from-judges-bureaucrats-veterans-3128597?utm_source=newsshowcase&utm_medium=gnews&utm_campaign=CDAqEAgAKgcICjCPyf8KMMit-QIwjatc&utm_content=rundown"
    },{
      topic:"Mumbai Rain",
      title : "Mumbai On Alert For Heavy Rain, Is Already Waterlogged",
      image : "assets/mumbai.jpg",
      url:"https://www.ndtv.com/mumbai-news/heavy-rains-lash-mumbai-and-suburbs-waterlogging-in-some-areas-3128017?utm_source=newsshowcase&utm_medium=gnews&utm_campaign=CDAqEAgAKgcICjCPyf8KMMit-QIwjatc&utm_content=rundown"
  }],
  time : "40 minutes ago"
},{
  publisher:"Times Now",
  isFollow : false,
    reference:[{
      topic:"Maharashtra Politics",
      title : "Was My Idea, Says Devendra Fadnavis On Eknath Shinde For Chief Minister",
      image : "assets/maharashtra.jpeg",
      url:"https://www.ndtv.com/india-news/eknath-shinde-made-cm-on-my-proposal-to-party-leaders-devendra-fadnavis-3129952?utm_source=newsshowcase&utm_medium=gnews&utm_campaign=CDAqEAgAKgcICjCPyf8KMMit-QIwjatc&utm_content=rundown"
    },{
      topic:"Judged Vs Judges",
      title : "For Supreme Court Judges, A New Controversy Over Nupur Sharma Criticism",
      image : "assets/sharma.jpeg",
      url:"ndtv.com/india-news/outrageous-supreme-courts-observations-on-nupur-sharma-come-under-fire-from-from-judges-bureaucrats-veterans-3128597?utm_source=newsshowcase&utm_medium=gnews&utm_campaign=CDAqEAgAKgcICjCPyf8KMMit-QIwjatc&utm_content=rundown"
    },{
      topic:"Mumbai Rain",
      title : "Mumbai On Alert For Heavy Rain, Is Already Waterlogged",
      image : "assets/mumbai.jpg",
      url:"https://www.ndtv.com/mumbai-news/heavy-rains-lash-mumbai-and-suburbs-waterlogging-in-some-areas-3128017?utm_source=newsshowcase&utm_medium=gnews&utm_campaign=CDAqEAgAKgcICjCPyf8KMMit-QIwjatc&utm_content=rundown"
  }],
  time : "2 hours ago"
},{
  publisher:"Indian Express",
  isFollow : false,
    reference:[{
      topic:"Maharashtra Politics",
      title : "Was My Idea, Says Devendra Fadnavis On Eknath Shinde For Chief Minister",
      image : "assets/maharashtra.jpeg",
      url:"https://www.ndtv.com/india-news/eknath-shinde-made-cm-on-my-proposal-to-party-leaders-devendra-fadnavis-3129952?utm_source=newsshowcase&utm_medium=gnews&utm_campaign=CDAqEAgAKgcICjCPyf8KMMit-QIwjatc&utm_content=rundown"
    },{
      topic:"Judged Vs Judges",
      title : "For Supreme Court Judges, A New Controversy Over Nupur Sharma Criticism",
      image : "assets/sharma.jpeg",
      url:"ndtv.com/india-news/outrageous-supreme-courts-observations-on-nupur-sharma-come-under-fire-from-from-judges-bureaucrats-veterans-3128597?utm_source=newsshowcase&utm_medium=gnews&utm_campaign=CDAqEAgAKgcICjCPyf8KMMit-QIwjatc&utm_content=rundown"
    },{
      topic:"Mumbai Rain",
      title : "Mumbai On Alert For Heavy Rain, Is Already Waterlogged",
      image : "assets/mumbai.jpg",
      url:"https://www.ndtv.com/mumbai-news/heavy-rains-lash-mumbai-and-suburbs-waterlogging-in-some-areas-3128017?utm_source=newsshowcase&utm_medium=gnews&utm_campaign=CDAqEAgAKgcICjCPyf8KMMit-QIwjatc&utm_content=rundown"
  }],
  time : "3 hours ago"
},{
  publisher:"Hindustan Times",
  isFollow : false,
    reference:[{
      topic:"Maharashtra Politics",
      title : "Was My Idea, Says Devendra Fadnavis On Eknath Shinde For Chief Minister",
      image : "assets/maharashtra.jpeg",
      url:"https://www.ndtv.com/india-news/eknath-shinde-made-cm-on-my-proposal-to-party-leaders-devendra-fadnavis-3129952?utm_source=newsshowcase&utm_medium=gnews&utm_campaign=CDAqEAgAKgcICjCPyf8KMMit-QIwjatc&utm_content=rundown"
    },{
      topic:"Judged Vs Judges",
      title : "For Supreme Court Judges, A New Controversy Over Nupur Sharma Criticism",
      image : "assets/sharma.jpeg",
      url:"ndtv.com/india-news/outrageous-supreme-courts-observations-on-nupur-sharma-come-under-fire-from-from-judges-bureaucrats-veterans-3128597?utm_source=newsshowcase&utm_medium=gnews&utm_campaign=CDAqEAgAKgcICjCPyf8KMMit-QIwjatc&utm_content=rundown"
    },{
      topic:"Mumbai Rain",
      title : "Mumbai On Alert For Heavy Rain, Is Already Waterlogged",
      image : "assets/mumbai.jpg",
      url:"https://www.ndtv.com/mumbai-news/heavy-rains-lash-mumbai-and-suburbs-waterlogging-in-some-areas-3128017?utm_source=newsshowcase&utm_medium=gnews&utm_campaign=CDAqEAgAKgcICjCPyf8KMMit-QIwjatc&utm_content=rundown"
  }],
  time : "4 hours ago"
},{
  publisher:"News18",
  isFollow : false,
    reference:[{
      topic:"Maharashtra Politics",
      title : "Was My Idea, Says Devendra Fadnavis On Eknath Shinde For Chief Minister",
      image : "assets/maharashtra.jpeg",
      url:"https://www.ndtv.com/india-news/eknath-shinde-made-cm-on-my-proposal-to-party-leaders-devendra-fadnavis-3129952?utm_source=newsshowcase&utm_medium=gnews&utm_campaign=CDAqEAgAKgcICjCPyf8KMMit-QIwjatc&utm_content=rundown"
    },{
      topic:"Judged Vs Judges",
      title : "For Supreme Court Judges, A New Controversy Over Nupur Sharma Criticism",
      image : "assets/sharma.jpeg",
      url:"ndtv.com/india-news/outrageous-supreme-courts-observations-on-nupur-sharma-come-under-fire-from-from-judges-bureaucrats-veterans-3128597?utm_source=newsshowcase&utm_medium=gnews&utm_campaign=CDAqEAgAKgcICjCPyf8KMMit-QIwjatc&utm_content=rundown"
    },{
      topic:"Mumbai Rain",
      title : "Mumbai On Alert For Heavy Rain, Is Already Waterlogged",
      image : "assets/mumbai.jpg",
      url:"https://www.ndtv.com/mumbai-news/heavy-rains-lash-mumbai-and-suburbs-waterlogging-in-some-areas-3128017?utm_source=newsshowcase&utm_medium=gnews&utm_campaign=CDAqEAgAKgcICjCPyf8KMMit-QIwjatc&utm_content=rundown"
  }],
  time : "5 hours ago"
}]
  constructor() { }
}
