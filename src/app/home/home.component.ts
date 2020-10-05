import {
  Component,
  OnInit,
  HostListener,
  AfterContentInit,
} from "@angular/core";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger,
} from "@angular/animations";
import { interval as observableInterval } from "rxjs";
import { takeWhile, scan, tap } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: `./home.component.html`,
  styleUrls: ["./home.component.scss"],
  animations: [
    // Trigger animation cards array
    trigger("cardAnimation", [
      // Transition from any state to any state
      transition("* => *", [
        // Initially the all cards are not visible
        query(":enter", style({ opacity: 0 }), { optional: true }),

        // Each card will appear sequentially with the delay of 300ms
        query(
          ":enter",
          stagger("45ms", [
            animate(
              ".5s ease-in",
              keyframes([
                style({
                  opacity: 0,
                  transform: "translateY(-10px) scale(1.05)",
                  offset: 0,
                }),
                style({
                  opacity: 0.5,
                  transform: "translateY(-5px) scale(1)",
                  offset: 0.3,
                }),
                style({ opacity: 1, transform: "translateY(0)", offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),

        // Cards will disappear sequentially with the delay of 300ms
        query(
          ":leave",
          stagger("6ms", [
            animate(
              "350ms ease-out",
              keyframes([
                style({ opacity: 1, transform: "translateY(0px)", offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: "translateY(5px)",
                  offset: 0.3,
                }),
                style({
                  opacity: 0,
                  transform: "translateY(10px) scale(.995)",
                  offset: 1,
                }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit, AfterContentInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  @HostListener("document:click", ["$event"])
  documentClick(event: MouseEvent) {
    this.tiles.forEach((element) => {
      element.hide = false;
      element.toggled = false;
    });
  }

  displaySwitcher = "experience";

  /* Title, will be displayed at top of page. */

  p: string;
  i: number;

  title = "Clean Card";

  /* If you want to change the route name, change it here AND in app-routing.module.ts */
  nameOfRoute = "home"


  /* Include your actual profile links below. These are just examples. */
  contact = [
    {
      id: 0,
      title: "LinkedIn",
      link: "https://www.linkedin.com/",
    },
    {
      id: 1,
      title: "Github",
      link: "https://github.com/",
    },
    {
      id: 2,
      title: "Stack Overflow",
      link: "https://stackoverflow.com/",
    },
  ];

  /* Portfolio. Image (source) is optional. Link can be left empty ( "" ), but not recommended as it's good to provide links to prove your portfolio.  */
  portfolio = [
    {
      id: 0,
      title: "Name of thing I did",
      text: "Description of that thing I did",
      link: "https://www.google.com",
      source: "",
    },
    {
      id: 1,
      title: "Github/profileName",
      text: "Miscellenious contributions, side projects, and hobbies.",
      link: "https://github.com/",
      source: "../assets/github-icon.png",
    },
  ];

  /* Nothing special. Just a list of items in quotes, separated by commas. Add as many as you need. */
  skills = [
    "Angular",
    "Typescript",
    "HTML",
    "Javascript",
    "CSS",
    "Brushing my teeth",
    "Water bottle flips",
  ];

  tiles = [
    {
      id: 0,
      title: "Job title",
      subTitle: "Company Name (1998 - Current)",
      text:
        "Short description of my role and expections in that job. I used these technologies:",
      list: ["Angular", "HTML", "Javascript", "CSS", "Bunch of others"],
      big: true,
      toggled: false,
      hide: false,
    },
    {
      id: 1,
      title: "Item 2",
      subTitle: "Place (Time)",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      list: ["Thing1", "Thing2", "Thing3", "Thing4"],
      big: true,
      toggled: false,
      hide: false,
    },
    {
      id: 2,
      title: "Item 3",
      subTitle: "Place (Time)",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      list: ["Thing1", "Thing2", "Thing3", "Thing4"],
      big: false,
      toggled: false,
      hide: false,
    },
    {
      id: 3,
      title: "Item 4",
      subTitle: "Place (Time)",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      list: ["Thing1", "Thing2", "Thing3", "Thing4"],
      big: false,
      toggled: false,
      hide: false,
    },
    {
      id: 4,
      title: "Item 5",
      subTitle: "Place (Time)",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      list: ["Thing1", "Thing2", "Thing3", "Thing4"],
      big: false,
      toggled: false,
      hide: false,
    },
    {
      id: 5,
      title: "Item 6",
      subTitle: "Place (Time)",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      list: ["Thing1", "Thing2", "Thing3", "Thing4"],
      big: false,
      toggled: false,
      hide: false,
    },
  ];

  ngOnInit() {
    this.p = this.route.snapshot.queryParamMap.get("p");

    if (this.route.snapshot.queryParamMap.get("i")) {
      this.i = Number(this.route.snapshot.queryParamMap.get("i"));

      let match = this.tiles.find((item) => item.id === this.i);
      if (!!match) {
        match.toggled = true;
        this.toggleTiles(this.i);
      }
    } else {
      this.i = null;

    }

    if (this.route.snapshot.queryParamMap.get("p")) {
      this.displaySwitcher = this.p;
    } else {
      this.displaySwitcher = "experience";
      this.router.navigate([`/${this.nameOfRoute}`], {
        queryParams: { p: this.displaySwitcher },
      });
    }

    this.route.queryParams.subscribe((params) => {

      this.p = params.p;

      this.i = params.i;
    });
  }

  ngAfterContentInit(): void {


    if (this.i) {
      setTimeout(() => {
        let el = document.getElementById(`item-${this.i}`);
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 500);
    }
  }
  updateUrl() {
    this.router.navigate([`/${this.nameOfRoute}`], {
      queryParams: { p: this.displaySwitcher },
    });
  }

  tileClick(tileId, elementId) {
    this.tiles[tileId].toggled = !this.tiles[tileId].toggled;

    this.toggleTiles(tileId);

    this.router.navigate([`/${this.nameOfRoute}`], {
      queryParams: { p: this.displaySwitcher },
    });
    this.router.navigate([`/${this.nameOfRoute}`], {
      queryParams: { i: tileId },
      queryParamsHandling: "merge",
    });
    if (this.tiles.every((element) => !element.toggled)) {
      this.router.navigate([`/${this.nameOfRoute}`], {
        queryParams: { p: this.displaySwitcher },
      });
      let el = document.getElementById(`item-${elementId}`);
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    } else {
      /* this.jumpToTop(); */
      let el = document.getElementById(`item-${elementId}`);
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  }

  toggleTiles(tileId) {
    this.tiles.forEach((element) => {
      if (element.id !== tileId) {
        element.hide = !element.hide;
        element.toggled = false;
      }
    });
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  openLinkUrl(url) {
    if (url) {
    window.open(url, "_blank");
    }
  }

  jumpToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  cleanupTiles() {
    this.tiles.forEach((element) => {
      element.hide = false;
      element.toggled = false;
    });
  }

  scrollToTop(el) {
    const duration = 200;
    const interval = 5;
    const move = (el.scrollTop * interval) / duration;
    observableInterval(interval)
      .pipe(
        scan((acc, curr) => acc - move, el.scrollTop),
        tap((position) => (el.scrollTop = position)),
        takeWhile((val) => val > 0)
      )
      .subscribe();
  }
}
