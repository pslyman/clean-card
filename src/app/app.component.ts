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

@Component({
  selector: "app-root",
  templateUrl: `./app.component.html`,
  styleUrls: ["./app.component.scss"],
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
export class AppComponent implements OnInit, AfterContentInit {
  @HostListener("document:click", ["$event"])
  documentClick(event: MouseEvent) {
    this.tiles.forEach((element) => {
      element.hide = false;
      element.toggled = false;
    });
  }
/* Title, will be displayed at top of page. */
  title = "Clean Card";

  displaySwitcher = "experience";

  /* Make sure to add your actual profile links below. These are just examples. */
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
/* Portfolio. Image (source) is optional.  */
  portfolio = [
    {
      id: 0,
      title: "Google.com",
      text: "Yep. I made Google.com. Here it is. Please hire me.",
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

  skills = [
    "Angular",
    "Typescript",
    "HTML",
    "Javascript",
    "CSS",
    "Brushing my teeth",
    "Water bottle flips"
  ];

  tiles = [
    {
      id: 0,
      title: "Software Engineer",
      subTitle: "Google (1998 - Current)",
      text:
        "Since I made Google, I've been here a while. Please help me leave. I know these technologies:",
      list: [
        "Angular",
        "HTML",
        "Javascript",
        "CSS",
        "Bunch of others"
      ],
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
    let urlHash = window.location.href.split("#")[1];

    if (urlHash) {
      this.displaySwitcher = urlHash;
    } else {
      this.displaySwitcher = "experience";
    }
    let urlIdHash = Number(window.location.href.split("#")[2]);
    if (urlIdHash) {
      let match = this.tiles.find((item) => item.id === urlIdHash);
      if (!!match) {
        match.toggled = true;
        this.toggleTiles(urlIdHash);
      }
    }
  }

  ngAfterContentInit(): void {
    let urlIdHash = Number(window.location.href.split("#")[2]);

    setTimeout(() => {
      let el = document.getElementById(`item-${urlIdHash}`);
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 500);
  }
  updateUrl() {
    window.history.replaceState(null, null, `#${this.displaySwitcher}`);
  }

  tileClick(tileId, elementId) {
    this.tiles[tileId].toggled = !this.tiles[tileId].toggled;

    this.toggleTiles(tileId);

    window.history.replaceState(
      null,
      null,
      `#${this.displaySwitcher}#${tileId}`
    );
    if (this.tiles.every((element) => !element.toggled)) {
      window.history.replaceState(null, null, `#${this.displaySwitcher}`);
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
    window.open(url, "_blank");
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
