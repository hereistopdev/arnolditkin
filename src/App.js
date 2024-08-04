import logo from "./logo.svg";
import "./App.css";

import { Helmet } from "react-helmet";
import YourComponent from "./test";
import NMWCLIP from "./nmwclip";

function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Arnold & Itkin",
    description: "Personal Injury Attorney",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6009 Memorial Drive",
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: "77007",
    },
    image: "/images/logo-dark.2307211517203.png",
    telephone: "(888) 493-1629",
    url: "https://www.arnolditkin.com",
    geo: {
      "@type": "GeoCoordinates",
      latitude: "29.7610788",
      longitude: "-95.4229852",
    },
  };
  return (
    <div className="App" id="home">
      <div id="AccessibilityZone">
        <nav
          class="accessibility-menu ui-repeater"
          id="AccessibilityMenu"
          universal_="true"
          data-showhide="true"
          data-class-name="show"
          data-action="panel"
        >
          <button
            class="nlf-middle"
            title="Open/Close the accessibility options menu"
            tabindex="0"
            data-role="btn"
            data-use="accessibility.36"
            data-action="open"
            data-type="open"
            data-item="i"
            data-key="1"
          >
            <svg
              viewBox="0 0 36 36"
              class="open"
              data-use="/cms/svg/site/u1u1br5b8ke.36.2407091106543.svg#accessibility"
            >
              <path d="M17.979 0C20.182 0 21.957 1.775 21.957 3.978C21.957 6.18 20.182 7.955 17.979 7.955C15.777 7.955 14.002 6.18 14.002 3.978C14.002 1.844 15.777 0 17.979 0ZM14.002 34.721C13.647 35.503 12.937 35.928 12.154 35.928C11.872 35.928 11.585 35.856 11.302 35.714C10.237 35.218 9.81 34.011 10.309 32.946C10.309 32.946 14.216 23.998 14.926 20.733C15.209 19.596 15.353 16.545 15.422 15.125C15.422 14.628 15.139 14.201 14.712 14.06L5.909 11.503C4.771 11.148 4.133 9.941 4.488 8.876C4.843 7.811 6.051 7.315 7.116 7.598C7.116 7.598 15.139 10.155 17.979 10.155C20.819 10.155 28.986 7.528 28.986 7.528C30.051 7.245 31.258 7.883 31.543 8.948C31.826 10.013 31.188 11.22 30.123 11.505L21.388 14.132C20.961 14.273 20.606 14.7 20.678 15.197C20.75 16.617 20.892 19.671 21.175 20.805C21.885 24.072 25.79 33.018 25.79 33.018C26.287 34.083 25.79 35.29 24.797 35.786C24.515 35.928 24.228 36 23.945 36C23.163 36 22.384 35.573 22.098 34.793L17.979 26.2L14.002 34.721Z"></path>
            </svg>
            <svg
              viewBox="0 0 36 36"
              class="close"
              data-use="/cms/svg/site/u1u1br5b8ke.36.2407091106543.svg#hide"
            >
              <path d="M21.074 17.999L34.815 4.256C35.087 4.054 35.311 3.794 35.473 3.498C35.635 3.2 35.731 2.872 35.757 2.532C35.779 2.196 35.731 1.856 35.613 1.536C35.495 1.22 35.307 0.932 35.067 0.692C34.831 0.454 34.541 0.268 34.223 0.148C33.905 0.03 33.567-0.02 33.227 0.008C32.891 0.03 32.561 0.124 32.263 0.288C31.967 0.452 31.707 0.674 31.503 0.946L17.764 14.687L4.021 0.946C3.565 0.604 3.001 0.436 2.433 0.48C1.865 0.52 1.333 0.764 0.929 1.166C0.529 1.568 0.285 2.102 0.245 2.67C0.201 3.238 0.369 3.802 0.709 4.256L14.452 17.999L0.709 31.74C0.369 32.198 0.201 32.758 0.245 33.326C0.285 33.894 0.529 34.43 0.929 34.83C1.333 35.234 1.865 35.478 2.433 35.52C3.001 35.558 3.565 35.392 4.021 35.05L17.764 21.311L31.503 35.05C31.707 35.322 31.967 35.546 32.263 35.71C32.561 35.872 32.891 35.966 33.227 35.994C33.567 36.018 33.905 35.966 34.223 35.85C34.541 35.73 34.831 35.542 35.067 35.306C35.307 35.066 35.495 34.778 35.613 34.46C35.731 34.142 35.779 33.802 35.757 33.464C35.731 33.126 35.635 32.798 35.473 32.498C35.311 32.204 35.087 31.942 34.815 31.74L21.074 17.999Z"></path>
            </svg>
          </button>
          <div
            data-accessibility-menu="true"
            data-role="panel"
            data-item="i"
            data-key="1"
          >
            <ul>
              <li>
                <button class="nlf-middle" data-action="content">
                  <svg
                    viewBox="0 0 36 36"
                    class="fit"
                    data-use="/cms/svg/site/u1u1br5b8ke.36.2407091106543.svg#content"
                  >
                    <path d="M2.25 4.5H33.75C34.346 4.5 34.92 4.736 35.341 5.159C35.764 5.58 36 6.154 36 6.75C36 7.346 35.764 7.92 35.341 8.341C34.92 8.764 34.346 9 33.75 9H2.25C1.654 9 1.08 8.764 0.659 8.341C0.236 7.92 0 7.346 0 6.75C0 6.154 0.236 5.58 0.659 5.159C1.08 4.736 1.654 4.5 2.25 4.5ZM0 18C0 18.596 0.236 19.17 0.659 19.591C1.08 20.014 1.654 20.25 2.25 20.25H29.25C29.846 20.25 30.42 20.014 30.841 19.591C31.264 19.17 31.5 18.596 31.5 18C31.5 17.404 31.264 16.83 30.841 16.409C30.42 15.986 29.846 15.75 29.25 15.75H2.25C1.654 15.75 1.08 15.986 0.659 16.409C0.236 16.83 0 17.404 0 18ZM0 29.25C0 29.846 0.236 30.42 0.659 30.841C1.08 31.264 1.654 31.5 2.25 31.5H24.75C25.346 31.5 25.92 31.264 26.341 30.841C26.764 30.42 27 29.846 27 29.25C27 28.654 26.764 28.08 26.341 27.659C25.92 27.236 25.346 27 24.75 27H2.25C1.654 27 1.08 27.236 0.659 27.659C0.236 28.08 0 28.654 0 29.25Z"></path>
                  </svg>
                  Skip to Content
                </button>
              </li>
              <li>
                <button class="nlf-middle" data-action="largeText">
                  <svg
                    viewBox="0 0 36 36"
                    class="fit"
                    data-use="/cms/svg/site/u1u1br5b8ke.36.2407091106543.svg#text_size"
                  >
                    <path d="M24.75 9C24.154 9 23.58 8.764 23.159 8.341C22.736 7.92 22.5 7.346 22.5 6.75H15.75V29.25C16.346 29.25 16.92 29.486 17.341 29.909C17.764 30.33 18 30.904 18 31.5C18 32.096 17.764 32.67 17.341 33.091C16.92 33.514 16.346 33.75 15.75 33.75H11.25C10.654 33.75 10.08 33.514 9.659 33.091C9.236 32.67 9 32.096 9 31.5C9 30.904 9.236 30.33 9.659 29.909C10.08 29.486 10.654 29.25 11.25 29.25V6.75H4.5C4.5 7.346 4.264 7.92 3.841 8.341C3.42 8.764 2.846 9 2.25 9C1.654 9 1.08 8.764 0.659 8.341C0.236 7.92 0 7.346 0 6.75V4.5C0 3.904 0.236 3.33 0.659 2.909C1.08 2.486 1.654 2.25 2.25 2.25H24.75C25.346 2.25 25.92 2.486 26.341 2.909C26.764 3.33 27 3.904 27 4.5V6.75C27 7.346 26.764 7.92 26.341 8.341C25.92 8.764 25.346 9 24.75 9ZM36 18V15.75C36 15.154 35.764 14.58 35.341 14.159C34.92 13.736 34.346 13.5 33.75 13.5H20.25C19.654 13.5 19.08 13.736 18.659 14.159C18.236 14.58 18 15.154 18 15.75V18C18 18.596 18.236 19.17 18.659 19.591C19.08 20.014 19.654 20.25 20.25 20.25C20.846 20.25 21.42 20.014 21.841 19.591C22.264 19.17 22.5 18.596 22.5 18H24.75V29.25C24.154 29.25 23.58 29.486 23.159 29.909C22.736 30.33 22.5 30.904 22.5 31.5C22.5 32.096 22.736 32.67 23.159 33.091C23.58 33.514 24.154 33.75 24.75 33.75H29.25C29.846 33.75 30.42 33.514 30.841 33.091C31.264 32.67 31.5 32.096 31.5 31.5C31.5 30.904 31.264 30.33 30.841 29.909C30.42 29.486 29.846 29.25 29.25 29.25V18H31.5C31.5 18.596 31.736 19.17 32.159 19.591C32.58 20.014 33.154 20.25 33.75 20.25C34.346 20.25 34.92 20.014 35.341 19.591C35.764 19.17 36 18.596 36 18Z"></path>
                  </svg>
                  Increase Text Size
                </button>
              </li>
              <li>
                <button class="nlf-middle" data-action="clear">
                  <svg
                    viewBox="0 0 36 36"
                    class="fit"
                    data-use="/cms/svg/site/u1u1br5b8ke.36.2407091106543.svg#reset"
                  >
                    <path d="M4.887 15.425C4.46 17.994 4.824 20.634 5.933 22.992C6.239 23.62 6.588 24.225 6.98 24.805L7.486 25.411L8.924 23.97C9.227 23.687 9.628 23.527 10.044 23.527C10.458 23.527 10.858 23.687 11.162 23.97C11.403 24.202 11.558 24.508 11.603 24.839V30.885C11.657 31.301 11.547 31.722 11.297 32.059C11.048 32.399 10.676 32.626 10.264 32.698C10.102 32.732 9.936 32.732 9.774 32.698H3.645C3.443 32.671 3.249 32.604 3.076 32.5C2.9 32.397 2.747 32.26 2.626 32.097C2.504 31.935 2.416 31.749 2.367 31.553C2.318 31.355 2.306 31.15 2.338 30.95C2.39 30.619 2.549 30.313 2.794 30.084L4.136 28.745L3.645 28.156C3.119 27.478 2.644 26.763 2.223 26.013C0.812 23.518 0.047 20.71 0 17.844C0.014 14.147 1.174 10.547 3.323 7.539C5.472 4.533 8.503 2.267 11.997 1.059C14.533 0.127 17.255-0.186 19.94 0.143C20.264 0.17 20.576 0.267 20.86 0.426C21.141 0.588 21.386 0.809 21.573 1.074C21.762 1.354 21.89 1.671 21.949 2.001C22.007 2.334 21.996 2.676 21.917 3.003C21.769 3.529 21.436 3.984 20.979 4.283C20.522 4.582 19.973 4.708 19.433 4.638C17.354 4.404 15.253 4.679 13.304 5.437C11.158 6.236 9.257 7.575 7.783 9.323C6.307 11.074 5.31 13.175 4.887 15.425ZM33.815 9.802C33.394 9.053 32.92 8.337 32.393 7.66L31.869 7.089L33.242 5.732C33.48 5.498 33.64 5.194 33.701 4.866C33.73 4.665 33.721 4.463 33.669 4.267C33.62 4.071 33.532 3.887 33.41 3.725C33.289 3.563 33.136 3.428 32.96 3.327C32.787 3.225 32.594 3.16 32.393 3.133H26.28C26.118 3.108 25.952 3.108 25.789 3.133C25.382 3.21 25.02 3.437 24.772 3.772C24.527 4.105 24.417 4.519 24.467 4.931V10.995C24.511 11.326 24.667 11.631 24.908 11.861C25.211 12.147 25.612 12.304 26.028 12.304C26.442 12.304 26.842 12.147 27.146 11.861L28.649 10.358L29.108 10.995C29.525 11.564 29.885 12.171 30.186 12.808C31.003 14.453 31.455 16.253 31.509 18.089C31.536 20.978 30.62 23.8 28.901 26.122C27.182 28.446 24.754 30.147 21.982 30.966C20.248 31.524 18.41 31.686 16.605 31.44C16.072 31.368 15.529 31.494 15.084 31.796C14.636 32.097 14.317 32.552 14.186 33.074C14.105 33.389 14.09 33.718 14.144 34.039C14.198 34.361 14.317 34.667 14.497 34.937C14.668 35.187 14.893 35.398 15.151 35.556C15.41 35.713 15.698 35.814 16 35.853C16.715 35.938 17.438 35.981 18.158 35.983C20.149 35.988 22.126 35.632 23.992 34.937C26.433 34.147 28.67 32.826 30.537 31.067C32.404 29.31 33.863 27.159 34.799 24.769C35.737 22.382 36.133 19.815 35.96 17.254C35.788 14.696 35.048 12.205 33.797 9.964L33.815 9.802Z"></path>
                  </svg>
                  Reset Settings
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <header id="HeaderZone">
        <form
          id="Form_Header"
          method="post"
          enctype="multipart/form-data"
          action="https://www.arnolditkin.com/"
          data-search="1"
        >
          <input type="hidden" name="_m_" value="Header" />
          <section
            id="Header"
            class="masthead nlf-middle-between dark-bg"
            universal_="true"
            data-header="true"
            data-showhide="true"
            data-class-name="menu-open"
            data-html-class="true"
            data-formdefer="true"
          >
            <a
              class="top-logo fit"
              aria-label="Home"
              title="Home"
              href="https://www.arnolditkin.com/"
            >
              <img
                alt="Arnold &amp; Itkin"
                title="Arnold &amp; Itkin"
                src="./assets_src/logo-2.2307211517203.png"
              />
            </a>

            <nav
              class="top-nav auto el-tab-box"
              id="TopNav"
              data-role="panel"
              data-closing="true"
            >
              <ul class="nlf-center block-1200" role="menu">
                <li class="nlf-wrap-middle rel" role="menuitem">
                  <a href="https://www.arnolditkin.com/about-us/" target="">
                    About Us
                  </a>

                  <span class="el-tab nlf-middle-center stretch-self rel"></span>

                  <div class="el-panel">
                    <ul class="ui-scroll" role="menu">
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/about-us/careers/"
                          target=""
                        >
                          Careers
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/about-us/co-counsel-opportunities/"
                          target=""
                        >
                          Co-Counsel Opportunities
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/about-us/community-involvement/"
                          target=""
                        >
                          Community Involvement
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/about-us/our-clients-stories/"
                          target=""
                        >
                          Our Clients' Stories
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/about-us/fee-arrangements/"
                          target=""
                        >
                          Fee Arrangements
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/awards-honors/"
                          target=""
                        >
                          Awards &amp; Honors
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/our-victories/"
                          target=""
                        >
                          Our Results
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/in-the-news/"
                          target=""
                        >
                          In the News
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a href="https://www.arnolditkin.com/blog/" target="">
                          Personal Injury Blog
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a href="https://www.arnolditkin.com/news/" target="">
                          News &amp; Updates
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/video-center/"
                          target=""
                        >
                          Video Center
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nlf-wrap-middle rel" role="menuitem">
                  <a
                    href="https://www.arnolditkin.com/meet-our-attorneys/"
                    target=""
                  >
                    Meet Our Attorneys
                  </a>

                  <span class="el-tab nlf-middle-center stretch-self rel"></span>

                  <div class="el-panel">
                    <ul class="ui-scroll" role="menu">
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/kurt-arnold/"
                          target=""
                        >
                          Kurt Arnold
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/jason-itkin/"
                          target=""
                        >
                          Jason Itkin
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/victoria-alford/"
                          target=""
                        >
                          Victoria Alford
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/cory-itkin/"
                          target=""
                        >
                          Cory Itkin
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/noah-wexler/"
                          target=""
                        >
                          Noah Wexler
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/kyle-findley/"
                          target=""
                        >
                          Kyle Findley
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/caj-boatright/"
                          target=""
                        >
                          Caj Boatright
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/tara-arnold/"
                          target=""
                        >
                          Tara Arnold
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/adam-lewis/"
                          target=""
                        >
                          Adam Lewis
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/kala-sellers/"
                          target=""
                        >
                          Kala Sellers
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/roland-christensen/"
                          target=""
                        >
                          Roland Christensen
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/claire-schindler/"
                          target=""
                        >
                          Claire Schindler
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/roy-buckmaster/"
                          target=""
                        >
                          Roy Buckmaster
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/brittany-clark/"
                          target=""
                        >
                          Brittany Clark
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/trent-shelton/"
                          target=""
                        >
                          Trent Shelton
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/andrew-gould/"
                          target=""
                        >
                          Andrew Gould
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/john-grinnan/"
                          target=""
                        >
                          John Grinnan
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/trevor-courtney/"
                          target=""
                        >
                          Trevor Courtney
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/brian-christensen/"
                          target=""
                        >
                          Brian Christensen
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/ali-poulson/"
                          target=""
                        >
                          Ali Poulson
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/alec-paradowski/"
                          target=""
                        >
                          Alec Paradowski
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/katelin-gines/"
                          target=""
                        >
                          Katelin Gines
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/samuel-long/"
                          target=""
                        >
                          Samuel Long
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/daniel-moreno/"
                          target=""
                        >
                          Daniel Moreno
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/andrew-bowman/"
                          target=""
                        >
                          Andrew Bowman
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/james-long/"
                          target=""
                        >
                          James Long
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/parker-cragg/"
                          target=""
                        >
                          Parker Cragg
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/meet-our-attorneys/jamie-ford/"
                          target=""
                        >
                          Jamie Ford
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nlf-wrap-middle rel" role="menuitem">
                  <a
                    href="https://www.arnolditkin.com/practice-areas/"
                    target=""
                  >
                    Practice Areas
                  </a>

                  <span class="el-tab nlf-middle-center stretch-self rel"></span>

                  <div class="el-panel">
                    <ul class="ui-scroll" role="menu">
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/personal-injury/"
                          target=""
                        >
                          Personal Injury
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/offshore-injuries/"
                          target=""
                        >
                          Offshore Injuries
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/plant-refinery-accidents/"
                          target=""
                        >
                          Plant &amp; Refinery Accidents
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/oil-rig-explosions/"
                          target=""
                        >
                          Oil Rig Explosions
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/industrial-injury/"
                          target=""
                        >
                          Industrial Accidents
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/oilfield-accidents/"
                          target=""
                        >
                          Oilfield Accidents
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/houston-truck-accident-lawyer/"
                          target=""
                        >
                          Truck Accidents
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/catastrophic-injuries/"
                          target=""
                        >
                          Serious Injuries
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/medical-pharmaceutical-injury/"
                          target=""
                        >
                          Medical &amp; Drug Injuries
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/motor-vehicle-accidents/"
                          target=""
                        >
                          Vehicle Accidents
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/property-contamination/"
                          target=""
                        >
                          Property Contamination
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/product-liability/"
                          target=""
                        >
                          Defective Products
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/railroad-accidents/"
                          target=""
                        >
                          Railroad Accidents
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/aviation-accidents/"
                          target=""
                        >
                          Aviation Accidents
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/insurance-claims/"
                          target=""
                        >
                          Insurance Claims
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nlf-wrap-middle rel" role="menuitem">
                  <a
                    href="https://www.arnolditkin.com/our-victories/"
                    target=""
                  >
                    Our Victories
                  </a>
                </li>
                <li class="nlf-wrap-middle rel" role="menuitem">
                  <a
                    href="https://www.arnolditkin.com/video-center/client-testimonials/"
                    target=""
                  >
                    Testimonials
                  </a>
                </li>
                <li class="nlf-wrap-middle rel" role="menuitem">
                  <a
                    href="https://www.arnolditkin.com/common-questions/"
                    target=""
                  >
                    Common Questions
                  </a>

                  <span class="el-tab nlf-middle-center stretch-self rel"></span>

                  <div class="el-panel">
                    <ul class="ui-scroll" role="menu">
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/common-questions/personal-injury-faqs/"
                          target=""
                        >
                          Personal Injury FAQs
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/common-questions/maritime-offshore-injury-faqs/"
                          target=""
                        >
                          Maritime / Offshore Injury FAQs
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/common-questions/trucking-injury-faqs/"
                          target=""
                        >
                          Trucking Injury FAQs
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/common-questions/medical-pharmaceutical-injury-faqs/"
                          target=""
                        >
                          Medical / Pharmaceutical Injury FAQs
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/common-questions/industrial-injury-faqs/"
                          target=""
                        >
                          Industrial Injury FAQs
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/common-questions/commercial-litigation-faqs/"
                          target=""
                        >
                          Commercial Litigation FAQs
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/common-questions/insurance-claims-faqs/"
                          target=""
                        >
                          Insurance Claims FAQs
                        </a>
                      </li>
                      <li class="nlf-wrap-middle rel" role="menuitem">
                        <a
                          href="https://www.arnolditkin.com/common-questions/property-contamination-faqs/"
                          target=""
                        >
                          Property Contamination FAQs
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nlf-wrap-middle rel" role="menuitem">
                  <a href="https://abogado.arnolditkin.com/" target="_blank">
                    Español
                  </a>
                </li>
                <li class="nlf-wrap-middle rel show-1200" role="menuitem">
                  <a href="https://www.arnolditkin.com/contact-us/">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div
                class="mobile-search nlf-middle fit show-1200 ui-repeater"
                id="TopNav_FTR0_ctl00"
              >
                <div class="input-text" data-item="i" data-key="">
                  <label for="TopNav_FTR0_ctl00_ITM0_C" class="ninja">
                    Search
                  </label>
                  <input
                    type="search"
                    placeholder="Search"
                    id="TopNav_FTR0_ctl00_ITM0_C"
                    class="ui-cms-input"
                    name="TopNav$FTR0$ctl00$ITM0$C"
                    value=""
                  />
                </div>
                <button
                  type="submit"
                  id="TopNav_FTR0_ctl00_ITM0_ctl02"
                  name="TopNav$FTR0$ctl00$ITM0$ctl02"
                  data-item="i"
                  data-key=""
                  data-commandname="Search"
                >
                  <svg
                    viewBox="0 0 16 16"
                    role="presenation"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#search"
                  >
                    <path d="M0.313 15.687C0.513 15.888 0.784 16 1.068 16C1.351 16 1.622 15.888 1.822 15.687L4.98 12.532C6.877 13.918 9.347 14.248 11.542 13.41C13.737 12.57 15.358 10.677 15.847 8.38C16.338 6.082 15.63 3.692 13.969 2.031C12.308 0.37 9.918-0.338 7.62 0.153C5.323 0.642 3.43 2.263 2.59 4.458C1.752 6.653 2.082 9.123 3.468 11.02L0.314 14.178C0.112 14.378 0 14.649 0 14.932C0 15.216 0.112 15.486 0.313 15.687ZM9.067 2.133C10.34 2.133 11.561 2.638 12.461 3.539C13.362 4.439 13.867 5.66 13.867 6.933C13.867 8.206 13.362 9.427 12.461 10.327C11.561 11.228 10.34 11.733 9.067 11.733C7.794 11.733 6.574 11.228 5.673 10.327C4.772 9.427 4.267 8.206 4.267 6.933C4.267 5.66 4.772 4.439 5.673 3.539C6.573 2.638 7.794 2.133 9.067 2.133Z"></path>
                  </svg>
                </button>
              </div>
              <a
                href="https://www.arnolditkin.com/schedule-online/"
                class="btn nlf-inline-middle-center show-1200"
              >
                <svg
                  viewBox="0 0 24 24"
                  role="presentation"
                  class="fit"
                  data-use="/cms/svg/site/u1u1br5b8ke.24.2407091106502.svg#calendar"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    d="M12.9 18.9H1.8c-0.6 0-1.2-0.5-1.2-1.2v-14c0-0.6 0.5-1.2 1.2-1.2H17c0.6 0 1.2 0.5 1.2 1.2v10M0.6 6.1h17.6M3.5 2.5V0.8M15.2 2.5V0.8M18.1 23.6c2.9 0 5.3-2.2 5.3-5c0-2.7-2.4-5-5.3-5s-5.3 2.2-5.3 5C12.9 21.4 15.2 23.6 18.1 23.6zM18.1 15.4v3.5M17.6 18.9h2.9M5.9 9H3.5v2.3h2.3V9zM5.9 13.7H3.5V16h2.3V13.7zM10.5 13.7H8.2V16h2.3V13.7zM10.5 9H8.2v2.3h2.3V9zM15.2 9h-2.3v2.3h2.3V9z"
                  ></path>
                </svg>
                Book Appointment
              </a>
            </nav>
            <div class="contact-info fit">
              <strong class="blk">100% Free Consultation</strong>
              <a href="tel:(888) 493-1629" id="Header_1">
                (888) 493-1629
              </a>
            </div>
            <a
              href="https://www.arnolditkin.com/contact-us/"
              class="btn hide-800"
            >
              Contact Us
            </a>
            <button
              class="menu-btn rlt show-1200"
              aria-label="Toggle Primary Navigation Menu"
              aria-controls="MobileMenu"
              aria-haspopup="true"
              type="button"
              data-role="btn"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <a class="anchor" name="SiteTop"></a>
            <a
              class="btn back-to-btn animate-to"
              title="Back To Top"
              href="https://www.arnolditkin.com/#SiteTop"
              tab-index="0"
            >
              <svg
                viewBox="0 0 16 16"
                role="presentation"
                data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#up"
              >
                <path
                  transform="rotate(180)"
                  d="M-0.3-12.202C-0.108-12.01 0-11.749 0-11.477C0-11.205-0.108-10.944-0.3-10.751L-7.266-3.781C-7.458-3.589-7.719-3.48-7.991-3.48C-8.263-3.48-8.524-3.589-8.716-3.781L-15.681-10.751C-15.882-10.942-15.997-11.206-16-11.482C-16.003-11.759-15.895-12.025-15.699-12.22C-15.503-12.416-15.237-12.524-14.961-12.52C-14.684-12.516-14.421-12.401-14.23-12.2L-7.991-5.955L-1.751-12.2C-1.559-12.393-1.299-12.502-1.026-12.502C-0.754-12.503-0.493-12.395-0.3-12.202L-0.3-12.202Z"
                ></path>
              </svg>
            </a>
          </section>
        </form>
      </header>
      <main id="MainZone">
        <section
          id="Mainstage_V1"
          class="mainstage v1 text-center dark-bg bg-image ui-repeater anm"
          universal_="true"
          data-onvisible="anm"
          data-showhide="true"
          data-class-name="open"
        >
          <figure class="bg">
            <video
              playsinline=""
              autoplay=""
              loop=""
              muted=""
              src="blob:https://www.arnolditkin.com/c70c48ba-0b93-4327-b593-9b55ed306f87"
              data-replace="false"
            ></video>
          </figure>
          <div class="main">
            <header>
              <small class="blk">
                <span class="blk">
                  The Nation's Leading Personal Injury Lawyers
                </span>
              </small>
              <em class="blk">
                <span class="nlf-middle-end">Over</span>
                <strong class="blk">
                  <b class="blk">$20 Billion</b>
                </strong>
                <span class="nlf-middle">Won</span>
              </em>
              <h2>
                Choose the Firm That Wins.
                <strong>
                  No Matter What<sub>TM</sub>
                </strong>
              </h2>
              <ul class="nlf-center-wrap gap-sm">
                <li>
                  <a
                    href="https://www.arnolditkin.com/schedule-online/"
                    class="btn"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      class="fit"
                      role="presentation"
                      data-use="/cms/svg/site/u1u1br5b8ke.24.2407091106502.svg#calendar"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        d="M12.9 18.9H1.8c-0.6 0-1.2-0.5-1.2-1.2v-14c0-0.6 0.5-1.2 1.2-1.2H17c0.6 0 1.2 0.5 1.2 1.2v10M0.6 6.1h17.6M3.5 2.5V0.8M15.2 2.5V0.8M18.1 23.6c2.9 0 5.3-2.2 5.3-5c0-2.7-2.4-5-5.3-5s-5.3 2.2-5.3 5C12.9 21.4 15.2 23.6 18.1 23.6zM18.1 15.4v3.5M17.6 18.9h2.9M5.9 9H3.5v2.3h2.3V9zM5.9 13.7H3.5V16h2.3V13.7zM10.5 13.7H8.2V16h2.3V13.7zM10.5 9H8.2v2.3h2.3V9zM15.2 9h-2.3v2.3h2.3V9z"
                      ></path>
                    </svg>
                    Schedule Consultation
                  </a>
                </li>
                <li data-item="i" data-key="157228">
                  <a
                    href="javascript:void(0);"
                    class="btn"
                    title="Play Video"
                    data-role="btn"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      class="fit"
                      role="presentation"
                      data-use="/cms/svg/site/u1u1br5b8ke.24.2407091106502.svg#play"
                    >
                      <path
                        fill="none"
                        color="#1F33C8"
                        stroke="currentColor"
                        stroke-width="1"
                        d="M11.563 2.763C12.556 2.191 13.778 2.191 14.771 2.763L21.374 6.576C22.367 7.149 22.978 8.208 22.978 9.354V16.979C22.978 18.126 22.367 19.185 21.374 19.758L14.771 23.57C13.778 24.143 12.556 24.143 11.563 23.57L4.959 19.758C3.967 19.185 3.355 18.126 3.355 16.979V9.354C3.355 8.208 3.967 7.149 4.959 6.576L11.563 2.763Z"
                      ></path>
                      <path
                        fill="none"
                        color="#4258FF"
                        stroke="currentColor"
                        stroke-width="1"
                        d="M9.23 0.43C10.223-0.143 11.445-0.143 12.438 0.43L19.041 4.243C20.034 4.815 20.645 5.875 20.645 7.021V14.646C20.645 15.792 20.034 16.852 19.041 17.424L12.438 21.237C11.445 21.81 10.223 21.81 9.23 21.237L2.626 17.424C1.634 16.852 1.022 15.792 1.022 14.646V7.021C1.022 5.875 1.634 4.815 2.626 4.243L9.23 0.43Z"
                      ></path>
                      <path d="M12.756 11.187L9.455 13.383C9.175 13.575 8.792 13.368 8.792 13.029V8.638C8.792 8.299 9.175 8.093 9.455 8.284L12.756 10.48C13.007 10.642 13.007 11.025 12.756 11.187Z"></path>
                    </svg>
                    Get to Know Us
                  </a>
                </li>
              </ul>
            </header>
          </div>
          <div class="popup" data-role="panel" data-item="si" data-key="157228">
            <svg
              viewBox="0 0 16 16"
              aria-label="Close Popup"
              data-role="btn"
              data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#close"
            >
              <path d="M16 1.458L14.546 0.004L8 6.546L1.454 0.004L0 1.458L6.546 8L0 14.542L1.454 15.996L8 9.454L14.546 15.996L16 14.542L9.455 8L16 1.458Z"></path>
            </svg>
            <video
              type="video/mp4"
              controls=""
              preload="metadata"
              src="blob:https://www.arnolditkin.com/9585c3de-6071-4816-b3b7-86d925e366a7"
              data-replace="false"
              poster="https://d2a92m131axhse.cloudfront.net/cms/thumbnails/34/820x475/images/video-thumbnails/video-center.2307051724163.jpg"
              class=""
            ></video>
          </div>
        </section>
        <YourComponent />
        <form
          id="Form_Results_FeedV1"
          method="post"
          enctype="multipart/form-data"
          action="https://www.arnolditkin.com/"
          data-search="1"
        >
          <input type="hidden" name="_m_" value="Results_FeedV1" />
          <section
            id="Results_FeedV1"
            class="results v1 dark-bg anm"
            universal_="true"
            data-onvisible="anm"
          >
            <svg style={{ width: 0, height: 0 }}>
              <defs>
                <clippath id="AIclip" clipPathUnits="objectBoundingBox">
                  <path
                    transform="scale(0.00067,0.00115)"
                    d="M1422.2,128.1L1492,0h-445.1l69.7,128.1V556l171,308.5H1492l-69.8-128.1V128.1z M735.2,0H425.6l55,99.3
					L115.2,758.8L0,864.6h315.5l-76.4-113.1l73.8-133.2h455.3l72.6,131l-77.9,115.3h451.5L735.2,0z M371.1,513.3l169.5-305.8L710,513.3
					H371.1z"
                  ></path>
                </clippath>
              </defs>
            </svg>
            <figure
              class="ai_clip fit rel"
              style={{ clipPath: "url(#AIclip)" }}
            >
              <video
                playsinline=""
                autoplay=""
                loop=""
                muted=""
                src="blob:https://www.arnolditkin.com/e498810f-6eb7-4495-821e-f1abb1ae37ed"
                data-replace="false"
              ></video>
            </figure>
            <input
              type="hidden"
              class="ui-cms-input"
              id="ctl00__edit_"
              name="ctl00$_edit_"
              value=""
            />
            <input
              type="hidden"
              class="ui-cms-input"
              id="ctl00__command_"
              name="ctl00$_command_"
              value=""
            />
            <div class="ui-repeater ui-ajax active" id="ctl00">
              <input
                type="hidden"
                id="ctl00_HDR0_ResultsPerPage"
                autocomplete="off"
                class="ui-cms-input"
                name="ctl00$HDR0$ResultsPerPage"
                value="4"
                data-search="true"
              />
              <input
                type="hidden"
                id="ctl00_HDR0_PagingID"
                autocomplete="off"
                class="ui-cms-input"
                name="ctl00$HDR0$PagingID"
                value=""
                data-search="true"
              />
              <ul class="h_gap rel">
                <li data-item="i" data-key="757">
                  <small class="nlf-middle">
                    <svg
                      viewBox="0 0 24 24"
                      role="presentation"
                      data-use="/cms/svg/site/u1u1br5b8ke.24.2407091106502.svg#check"
                    >
                      <path
                        fill="none"
                        stroke="#1F33C8"
                        stroke-width="1"
                        d="M10.223 0.476C11.323-0.159 12.677-0.159 13.777 0.476L21.092 4.699C22.191 5.334 22.869 6.507 22.869 7.777V16.223C22.869 17.493 22.191 18.667 21.092 19.301L13.777 23.524C12.677 24.159 11.323 24.159 10.223 23.524L2.908 19.301C1.809 18.667 1.131 17.493 1.131 16.223V7.777C1.131 6.507 1.809 5.334 2.908 4.699L10.223 0.476Z"
                      ></path>
                      <path d="M16.815 9.602L11.087 15.33C10.83 15.587 10.413 15.587 10.155 15.33L7.185 12.359C6.928 12.102 6.928 11.685 7.185 11.428C7.443 11.17 7.859 11.17 8.117 11.428L10.484 13.795C10.52 13.831 10.57 13.852 10.621 13.852C10.673 13.852 10.722 13.831 10.759 13.795L15.883 8.67C16.14 8.412 16.558 8.412 16.815 8.67C17.072 8.927 17.072 9.345 16.815 9.602Z"></path>
                    </svg>
                    Record-Setting
                  </small>
                  <strong class="blk">
                    $8
                    <b>Billion</b>
                  </strong>

                  <h3 class="nlf-top">
                    Top 3 Largest Jury Verdict in U.S. History
                  </h3>
                </li>
                <li data-item="i" data-key="1125">
                  <small class="nlf-middle">
                    <svg
                      viewBox="0 0 24 24"
                      role="presentation"
                      data-use="/cms/svg/site/u1u1br5b8ke.24.2407091106502.svg#check"
                    >
                      <path
                        fill="none"
                        stroke="#1F33C8"
                        stroke-width="1"
                        d="M10.223 0.476C11.323-0.159 12.677-0.159 13.777 0.476L21.092 4.699C22.191 5.334 22.869 6.507 22.869 7.777V16.223C22.869 17.493 22.191 18.667 21.092 19.301L13.777 23.524C12.677 24.159 11.323 24.159 10.223 23.524L2.908 19.301C1.809 18.667 1.131 17.493 1.131 16.223V7.777C1.131 6.507 1.809 5.334 2.908 4.699L10.223 0.476Z"
                      ></path>
                      <path d="M16.815 9.602L11.087 15.33C10.83 15.587 10.413 15.587 10.155 15.33L7.185 12.359C6.928 12.102 6.928 11.685 7.185 11.428C7.443 11.17 7.859 11.17 8.117 11.428L10.484 13.795C10.52 13.831 10.57 13.852 10.621 13.852C10.673 13.852 10.722 13.831 10.759 13.795L15.883 8.67C16.14 8.412 16.558 8.412 16.815 8.67C17.072 8.927 17.072 9.345 16.815 9.602Z"></path>
                    </svg>
                    Record-Setting
                  </small>
                  <strong class="blk">
                    $2.25
                    <b>Billion</b>
                  </strong>

                  <h3 class="nlf-top">
                    Record-Setting Victory for Roundup Cancer Victim
                  </h3>
                </li>
                <li data-item="i" data-key="1023">
                  <small class="nlf-middle">
                    <svg
                      viewBox="0 0 24 24"
                      role="presentation"
                      data-use="/cms/svg/site/u1u1br5b8ke.24.2407091106502.svg#check"
                    >
                      <path
                        fill="none"
                        stroke="#1F33C8"
                        stroke-width="1"
                        d="M10.223 0.476C11.323-0.159 12.677-0.159 13.777 0.476L21.092 4.699C22.191 5.334 22.869 6.507 22.869 7.777V16.223C22.869 17.493 22.191 18.667 21.092 19.301L13.777 23.524C12.677 24.159 11.323 24.159 10.223 23.524L2.908 19.301C1.809 18.667 1.131 17.493 1.131 16.223V7.777C1.131 6.507 1.809 5.334 2.908 4.699L10.223 0.476Z"
                      ></path>
                      <path d="M16.815 9.602L11.087 15.33C10.83 15.587 10.413 15.587 10.155 15.33L7.185 12.359C6.928 12.102 6.928 11.685 7.185 11.428C7.443 11.17 7.859 11.17 8.117 11.428L10.484 13.795C10.52 13.831 10.57 13.852 10.621 13.852C10.673 13.852 10.722 13.831 10.759 13.795L15.883 8.67C16.14 8.412 16.558 8.412 16.815 8.67C17.072 8.927 17.072 9.345 16.815 9.602Z"></path>
                    </svg>
                    Record-Setting
                  </small>
                  <strong class="blk">
                    $860
                    <b>Million</b>
                  </strong>

                  <h3 class="nlf-top">
                    History-Making Verdict After Fatal Crane Accident
                  </h3>
                </li>
                <li data-item="i" data-key="1025">
                  <small class="nlf-middle">
                    <svg
                      viewBox="0 0 24 24"
                      role="presentation"
                      data-use="/cms/svg/site/u1u1br5b8ke.24.2407091106502.svg#check"
                    >
                      <path
                        fill="none"
                        stroke="#1F33C8"
                        stroke-width="1"
                        d="M10.223 0.476C11.323-0.159 12.677-0.159 13.777 0.476L21.092 4.699C22.191 5.334 22.869 6.507 22.869 7.777V16.223C22.869 17.493 22.191 18.667 21.092 19.301L13.777 23.524C12.677 24.159 11.323 24.159 10.223 23.524L2.908 19.301C1.809 18.667 1.131 17.493 1.131 16.223V7.777C1.131 6.507 1.809 5.334 2.908 4.699L10.223 0.476Z"
                      ></path>
                      <path d="M16.815 9.602L11.087 15.33C10.83 15.587 10.413 15.587 10.155 15.33L7.185 12.359C6.928 12.102 6.928 11.685 7.185 11.428C7.443 11.17 7.859 11.17 8.117 11.428L10.484 13.795C10.52 13.831 10.57 13.852 10.621 13.852C10.673 13.852 10.722 13.831 10.759 13.795L15.883 8.67C16.14 8.412 16.558 8.412 16.815 8.67C17.072 8.927 17.072 9.345 16.815 9.602Z"></path>
                    </svg>
                    Record-Setting
                  </small>
                  <strong class="blk">
                    $557
                    <b>Million</b>
                  </strong>

                  <h3 class="nlf-top">
                    Massive Verdict Won Against Union Pacific
                  </h3>
                </li>
              </ul>

              <div class="scroll-nav nlf-middle-end">
                <a href="javascript:void(&#39;Prev&#39;)" disabled="">
                  <svg
                    viewBox="0 0 16 16"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#left"
                  >
                    <path d="M12.202 0.3C12.01 0.108 11.749 0 11.477 0C11.205 0 10.943 0.108 10.751 0.3L3.781 7.266C3.588 7.458 3.48 7.719 3.48 7.991C3.48 8.263 3.588 8.524 3.781 8.716L10.751 15.682C10.941 15.882 11.206 15.997 11.482 16C11.759 16.003 12.025 15.895 12.22 15.698C12.415 15.503 12.524 15.237 12.52 14.96C12.516 14.684 12.4 14.421 12.2 14.23L5.955 7.991L12.2 1.751C12.392 1.559 12.502 1.299 12.502 1.026C12.503 0.754 12.394 0.493 12.202 0.3L12.202 0.3Z"></path>
                  </svg>
                </a>

                <a href="javascript:void(&#39;Next&#39;)">
                  <svg
                    viewBox="0 0 16 16"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#right"
                  >
                    <path d="M3.798 0.3C3.99 0.108 4.251 0 4.523 0C4.795 0 5.057 0.108 5.249 0.3L12.219 7.266C12.412 7.458 12.52 7.719 12.52 7.991C12.52 8.263 12.412 8.524 12.219 8.716L5.249 15.682C5.059 15.882 4.794 15.997 4.518 16C4.241 16.003 3.975 15.895 3.78 15.698C3.585 15.503 3.476 15.237 3.48 14.96C3.484 14.684 3.6 14.421 3.8 14.23L10.045 7.991L3.8 1.751C3.608 1.559 3.498 1.299 3.498 1.026C3.497 0.754 3.606 0.493 3.798 0.3L3.798 0.3Z"></path>
                  </svg>
                </a>
              </div>

              <div>
                <a
                  href="https://www.arnolditkin.com/our-victories/"
                  class="btn"
                >
                  See All Our Victories
                </a>
              </div>
            </div>
          </section>
        </form>
        <section
          id="SplitContent_V1"
          class="split-content v1 dark-bg anm"
          data-onvisible="anm"
          data-showhide="true"
          data-class-name="open"
        >
          <header id="SplitContent_V1_Header">
            <h1>
              <span>Record-Setting Houston</span>

              <strong>Personal Injury Lawyers</strong>
            </h1>
          </header>
          <div class="main nlf-top gap block-1000">
            <figure class="half rel ui-repeater" id="ctl04">
              <picture
                class="nlf"
                data-role="picture"
                data-item="nr"
                data-key=""
              >
                <img
                  class="full rel"
                  src="./assets_src/kurt-jason-img.2306211023131.jpg"
                  alt=""
                  role="presentation"
                  loading="lazy"
                />
              </picture>
              <div class="ui-repeater" id="ctl04_FTR01_ctl00">
                <figcaption class="full" data-item="i" data-key="157228">
                  <div id="SplitContent_V1VideoTitle">
                    <span class="blk">
                      The Very Best Results for Your Personal Injury Case
                    </span>
                  </div>
                  <a
                    href="javascript:void(0);"
                    class="btn"
                    title="Play Video"
                    data-role="btn"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      role="presentation"
                      class="fit"
                      data-use="/cms/svg/site/u1u1br5b8ke.24.2407091106502.svg#play"
                    >
                      <path
                        fill="none"
                        color="#1F33C8"
                        stroke="currentColor"
                        stroke-width="1"
                        d="M11.563 2.763C12.556 2.191 13.778 2.191 14.771 2.763L21.374 6.576C22.367 7.149 22.978 8.208 22.978 9.354V16.979C22.978 18.126 22.367 19.185 21.374 19.758L14.771 23.57C13.778 24.143 12.556 24.143 11.563 23.57L4.959 19.758C3.967 19.185 3.355 18.126 3.355 16.979V9.354C3.355 8.208 3.967 7.149 4.959 6.576L11.563 2.763Z"
                      ></path>
                      <path
                        fill="none"
                        color="#4258FF"
                        stroke="currentColor"
                        stroke-width="1"
                        d="M9.23 0.43C10.223-0.143 11.445-0.143 12.438 0.43L19.041 4.243C20.034 4.815 20.645 5.875 20.645 7.021V14.646C20.645 15.792 20.034 16.852 19.041 17.424L12.438 21.237C11.445 21.81 10.223 21.81 9.23 21.237L2.626 17.424C1.634 16.852 1.022 15.792 1.022 14.646V7.021C1.022 5.875 1.634 4.815 2.626 4.243L9.23 0.43Z"
                      ></path>
                      <path d="M12.756 11.187L9.455 13.383C9.175 13.575 8.792 13.368 8.792 13.029V8.638C8.792 8.299 9.175 8.093 9.455 8.284L12.756 10.48C13.007 10.642 13.007 11.025 12.756 11.187Z"></path>
                    </svg>
                    Play Video
                  </a>
                </figcaption>
                <div
                  class="popup"
                  data-role="panel"
                  data-item="si"
                  data-key="157228"
                >
                  <svg
                    viewBox="0 0 16 16"
                    aria-label="Close Popup"
                    data-role="btn"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#close"
                  >
                    <path d="M16 1.458L14.546 0.004L8 6.546L1.454 0.004L0 1.458L6.546 8L0 14.542L1.454 15.996L8 9.454L14.546 15.996L16 14.542L9.455 8L16 1.458Z"></path>
                  </svg>
                  <video
                    type="video/mp4"
                    controls=""
                    preload="metadata"
                    src="blob:https://www.arnolditkin.com/ed3a1fdb-2ee6-4ba5-9dbd-e2a1f11d962e"
                    data-replace="false"
                    poster="https://d2a92m131axhse.cloudfront.net/cms/thumbnails/34/820x475/images/video-thumbnails/video-center.2307051724163.jpg"
                  ></video>
                </div>
              </div>
            </figure>
            <article
              class="half ui-repeater"
              id="SplitContent_V1Expand"
              data-showhide="true"
              data-slider="true"
              data-class-name="xpnded"
            >
              <div
                class="content"
                id="SplitContent_V1_Content"
                data-content="true"
                data-item="i"
                data-key="1"
              >
                <h2>Serious Injury Attorneys in Houston, Texas &amp; Beyond</h2>
                <p>
                  Our top-rated injury lawyers handle all types of cases
                  nationwide. Whether you need a
                  <a href="https://www.arnolditkin.com/houston-truck-accident-lawyer/">
                    truck accident lawyer
                  </a>
                  , an attorney to help after a serious
                  <a href="https://www.arnolditkin.com/houston-work-injury-attorneys/">
                    work accident
                  </a>
                  , or a personal injury attorney in Texas, Arnold &amp; Itkin
                  has helped people across the country win. Our Houston injury
                  attorneys have won more than $20 billion and
                  <strong>set many records for the best results</strong> across
                  the country for our victories, which has resulted in us being
                  named among the best personal injury lawyers in Houston and
                  the U.S. multiple times.
                </p>
                <h2>
                  Every Client Is Important to Our Houston Injury Law Firm
                </h2>
                <p>
                  If you talk to our clients, you’ll quickly hear a common
                  theme: our top-rated personal injury attorneys are like family
                  to them. That’s because we treat our clients the same way we'd
                  want someone to treat us—with dignity and respect.&nbsp;
                </p>
                <p>
                  From helping clients get much-needed medical care to fighting
                  for them with everything we have, we’re there for them. Our
                  clients trust our Houston personal injury law firm to find
                  answers, to get results, and to help them rebuild their lives.
                </p>
              </div>
              <div
                class="content xpnd"
                id="SplitContent_V1_ExpandingContent"
                aria-hidden="true"
                data-role="panel"
                data-start="2.5rem"
                data-item="i"
                data-key="1"
              >
                <p>
                  Every client, and every case, is
                  <strong>personal to us</strong>.
                </p>
                <h2>
                  Our Houston, Texas Personal Injury Attorneys Have Been Voted
                  Best Lawyers in America Numerous Times
                </h2>
                <p>
                  When you face the world’s largest companies, it’s part of
                  their playbook to outnumber and outspend you with lawyers. But
                  these corporate lawyers, no matter how many, don’t intimidate
                  us. Even in the face of the biggest challenges, our team of
                  top Houston personal injury lawyers consistently wins historic
                  victories for our clients.&nbsp;
                </p>
                <p class="text-highlight t2">
                  When clients are like family, you help them by winning.&nbsp;
                </p>
                <h2>
                  Houston Injury Lawyers Helping People from Coast to Coast
                </h2>
                <p>
                  From workers injured in
                  <a
                    href="https://www.arnolditkin.com/offshore-injuries/offshore-accidents/"
                    tabindex="-1"
                  >
                    catastrophic offshore accidents
                  </a>
                  to consumers hurt by dangerous products, we are passionate
                  about helping people recover after tragic incidents. We are
                  guided by our desire to help our clients in the traumatic
                  aftermath of serious wrongdoing. We are known for our
                  victories, and each year we've continued to set bigger
                  records. We proudly serve clients in the Houston area,
                  <a
                    href="https://www.arnolditkin.com/dallas-personal-injury/"
                    tabindex="-1"
                  >
                    Dallas
                  </a>
                  ,
                  <a
                    href="https://www.arnolditkin.com/louisiana/"
                    tabindex="-1"
                  >
                    Baton Rouge
                  </a>
                  ,
                  <a
                    href="https://www.arnolditkin.com/midland-personal-injury/"
                    tabindex="-1"
                  >
                    Midland
                  </a>
                  ,
                  <a
                    href="https://www.arnolditkin.com/new-mexico/"
                    tabindex="-1"
                  >
                    New Mexico
                  </a>
                  , and throughout the United States. In fact, our team has won
                  cases for clients in all 50 states. When our trial lawyers
                  commit to help a client, we take that case personally and give
                  it everything we've got to win the best result.&nbsp;
                </p>
              </div>
              <a
                class="btn rd-mr -middle"
                tabindex="0"
                data-role="btn"
                data-item="i"
                data-key="1"
              >
                <svg
                  viewBox="0 0 16 16"
                  class="opn"
                  aria-label="more"
                  title="More"
                  data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#down"
                >
                  <path d="M15.7 3.798C15.892 3.99 16 4.251 16 4.523C16 4.795 15.892 5.056 15.7 5.249L8.734 12.219C8.542 12.411 8.281 12.52 8.009 12.52C7.737 12.52 7.476 12.411 7.284 12.219L0.319 5.249C0.118 5.058 0.003 4.794 0 4.518C-0.003 4.241 0.105 3.975 0.301 3.78C0.497 3.584 0.763 3.476 1.039 3.48C1.316 3.484 1.579 3.599 1.77 3.8L8.009 10.045L14.249 3.8C14.441 3.607 14.701 3.498 14.974 3.498C15.246 3.497 15.507 3.605 15.7 3.798L15.7 3.798Z"></path>
                </svg>
                <svg
                  viewBox="0 0 16 16"
                  class="cls"
                  aria-label="close"
                  title="Close"
                  data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#up"
                >
                  <path
                    transform="rotate(180)"
                    d="M-0.3-12.202C-0.108-12.01 0-11.749 0-11.477C0-11.205-0.108-10.944-0.3-10.751L-7.266-3.781C-7.458-3.589-7.719-3.48-7.991-3.48C-8.263-3.48-8.524-3.589-8.716-3.781L-15.681-10.751C-15.882-10.942-15.997-11.206-16-11.482C-16.003-11.759-15.895-12.025-15.699-12.22C-15.503-12.416-15.237-12.524-14.961-12.52C-14.684-12.516-14.421-12.401-14.23-12.2L-7.991-5.955L-1.751-12.2C-1.559-12.393-1.299-12.502-1.026-12.502C-0.754-12.503-0.493-12.395-0.3-12.202L-0.3-12.202Z"
                  ></path>
                </svg>
                <span class="opn">Continue Reading</span>
                <span class="cls">Read Less</span>
              </a>
              <div
                class="content expand-co"
                id="SplitContent_V1_ContentCO"
                data-item="i"
                data-key="1"
              >
                <p class="text-highlight t4">
                  When we represent our clients, we’re all in. We fight hard for
                  them. <strong>No Matter What.™</strong>
                </p>
              </div>
              <div id="SplitContent_V1_Button" data-item="i" data-key="1">
                <div class="btn-con">
                  <a
                    class="btn"
                    href="https://www.arnolditkin.com/practice-areas/"
                  >
                    Cases We Handle
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section
          id="Founders_Feed"
          class="founders dark-bg block-1000 ui-repeater anm"
          universal_="true"
          data-onvisible="anm"
        >
          <header class="three-fifths">
            <h2>
              <span>Our Founding</span>
              <strong>Partners</strong>
            </h2>
          </header>
          <ul class="main nlf-top-wrap-reverse gap">
            <li class="half" data-item="i" data-key="5912">
              <div class="rel">
                <picture class="bg">
                  <source
                    media="(max-width: 550px)"
                    srcset="
                    https://d2a92m131axhse.cloudfront.net/cms/thumbnails/34/550x375/assets/staff/candid/kurt-arnold.2011151922365.jpg
                  "
                  />
                  <source
                    media="(max-width: 800px)"
                    srcset="
                    https://d2a92m131axhse.cloudfront.net/cms/thumbnails/34/770x490/assets/staff/candid/kurt-arnold.2011151922365.jpg
                  "
                  />
                  <source
                    media="(max-width: 1000px)"
                    srcset="
                    https://d2a92m131axhse.cloudfront.net/cms/thumbnails/34/430x515/assets/staff/candid/kurt-arnold.2011151922365.jpg
                  "
                  />
                  <img
                    src="./assets_src/kurt-arnold.2011151922365.jpg"
                    alt="Kurt Arnold"
                    loading="lazy"
                  />
                </picture>
                <div class="rel">
                  <small class="blk">Founding Partner</small>

                  <strong class="blk">Kurt Arnold</strong>
                  <a
                    href="https://www.arnolditkin.com/meet-our-attorneys/kurt-arnold/"
                    class="btn"
                  >
                    Meet Kurt
                  </a>
                </div>
              </div>

              <blockquote class="hide-800">
                “We take the cases we must win because it’s the right thing—the
                ones we have to win.
                <strong>Even if it’s hard. Especially if it’s hard.</strong>”
              </blockquote>
            </li>
            <li class="half" data-item="i" data-key="5910">
              <div class="rel">
                <picture class="bg">
                  <source
                    media="(max-width: 550px)"
                    srcset="
                    https://d2a92m131axhse.cloudfront.net/cms/thumbnails/34/550x375/assets/staff/candid/jason-itkin.2011151933332.jpg
                  "
                  />
                  <source
                    media="(max-width: 800px)"
                    srcset="
                    https://d2a92m131axhse.cloudfront.net/cms/thumbnails/34/770x490/assets/staff/candid/jason-itkin.2011151933332.jpg
                  "
                  />
                  <source
                    media="(max-width: 1000px)"
                    srcset="
                    https://d2a92m131axhse.cloudfront.net/cms/thumbnails/34/430x515/assets/staff/candid/jason-itkin.2011151933332.jpg
                  "
                  />
                  <img
                    src="./assets_src/jason-itkin.2011151933332.jpg"
                    alt="Jason Itkin"
                    loading="lazy"
                  />
                </picture>
                <div class="rel">
                  <small class="blk">Founding Partner</small>

                  <strong class="blk">Jason Itkin</strong>
                  <a
                    href="https://www.arnolditkin.com/meet-our-attorneys/jason-itkin/"
                    class="btn"
                  >
                    Meet Jason
                  </a>
                </div>
              </div>

              <blockquote class="hide-800">
                “People call me when something terrible has happened and they
                need help.
                <strong>
                  It is personal to my clients, so it is personal to me.
                </strong>
                We have to win—no matter what.”
              </blockquote>
            </li>
          </ul>
        </section>
        <section
          id="MeetTeam"
          class="meet-team dark-bg anm"
          universal_="true"
          data-onvisible="anm"
        >
          <header id="MeetTeam_Header">
            <h2>
              <span>Meet the</span>
              <strong>Arnold &amp; Itkin Team</strong>
            </h2>
            <div class="main">
              <p>
                <strong>Our attorneys will never be outworked.</strong>
                When our Houston personal injury lawyers represent a client,
                we're all in. We're a firm that never stops fighting for our
                clients. We won't back down. While some firms dread the late
                nights, the war room preparation, and going to trial, we live
                for it. That dedication and commitment to our clients is a big
                part of how we win the biggest verdicts and settlements in the
                U.S.
              </p>

              <a
                href="https://www.arnolditkin.com/meet-our-attorneys/"
                class="btn"
              >
                Meet the Team
              </a>
            </div>
          </header>
          <picture class="rel" data-role="picture">
            <source
              media="(max-width: 550px)"
              srcset="
              https://d2a92m131axhse.cloudfront.net/assets/staff/team-img-mobile.2305162207305.jpg
            "
            />
            <source
              media="(max-width: 1000px)"
              srcset="
              https://d2a92m131axhse.cloudfront.net/assets/staff/team-img-tablet.2305162207346.jpg
            "
            />
            <img
              class="full"
              src="./assets_src/team-img.2305162207263.jpg"
              alt=""
              role="presentation"
            />
          </picture>
        </section>
        <section
          id="Reviews_FeedV1"
          class="reviews v1 nlf-end dark-bg block-1000 el-tab-box ui-repeater anm start active"
          universal_="true"
          data-role="scroller"
          data-siblings="false"
          data-closing="true"
          data-video="true"
          data-onvisible="anm"
        >
          <div class="two-thirds">
            <header>
              <h2>
                <span>Hear Our</span>
                <strong>Clients' Stories</strong>
              </h2>
            </header>
            <div data-role="container">
              <ul data-role="list" role="tablist" style={{ transform: "none" }}>
                <li
                  class="nlf-top full s-active"
                  data-role="item"
                  data-item="i"
                  data-key="103855"
                >
                  <picture class="stretch-self auto rel">
                    <source
                      media="(max-width: 550px)"
                      srcset="
                      https://d2a92m131axhse.cloudfront.net/cms/thumbnails/34/500x420/images/video-thumbnails/mildred-screenshot.2307051724072.jpg
                    "
                    />
                    <source
                      media="(max-width: 1000px)"
                      srcset="
                      https://d2a92m131axhse.cloudfront.net/cms/thumbnails/34/950x550/images/video-thumbnails/mildred-screenshot.2307051724072.jpg
                    "
                    />
                    <img
                      alt=""
                      src="./assets_src/mildred-screenshot.2307051724072.jpg"
                      loading="lazy"
                      role="presentation"
                    />
                  </picture>
                  <blockquote class="fit full rel">
                    “I told him,
                    <strong>
                      “Kurt you’re my hero. You’re my knight in shining armor.”
                    </strong>
                    Because that’s how I feel toward him. He’s there to protect
                    me, and I feel so safe. They are driven. They are
                    aggressive. They will not quit for you. They will not give
                    up for you. That’s what makes them special.”
                    <div class="nlf-middle">
                      <address>
                        Mildred Solar Cortes
                        <small>El Faro Widow</small>
                      </address>
                      <a
                        href="javascript:void(0);"
                        class="btn el-tab"
                        title="Watch Video"
                        role="tab"
                        tabindex="0"
                        aria-selected="false"
                        aria-expanded="false"
                        aria-controls="Reviews_FeedV1WATCHVIDEO"
                        index="0"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          role="presentation"
                          class="fit"
                          data-use="/cms/svg/site/u1u1br5b8ke.24.2407091106502.svg#play"
                        >
                          <path
                            fill="none"
                            color="#1F33C8"
                            stroke="currentColor"
                            stroke-width="1"
                            d="M11.563 2.763C12.556 2.191 13.778 2.191 14.771 2.763L21.374 6.576C22.367 7.149 22.978 8.208 22.978 9.354V16.979C22.978 18.126 22.367 19.185 21.374 19.758L14.771 23.57C13.778 24.143 12.556 24.143 11.563 23.57L4.959 19.758C3.967 19.185 3.355 18.126 3.355 16.979V9.354C3.355 8.208 3.967 7.149 4.959 6.576L11.563 2.763Z"
                          ></path>
                          <path
                            fill="none"
                            color="#4258FF"
                            stroke="currentColor"
                            stroke-width="1"
                            d="M9.23 0.43C10.223-0.143 11.445-0.143 12.438 0.43L19.041 4.243C20.034 4.815 20.645 5.875 20.645 7.021V14.646C20.645 15.792 20.034 16.852 19.041 17.424L12.438 21.237C11.445 21.81 10.223 21.81 9.23 21.237L2.626 17.424C1.634 16.852 1.022 15.792 1.022 14.646V7.021C1.022 5.875 1.634 4.815 2.626 4.243L9.23 0.43Z"
                          ></path>
                          <path d="M12.756 11.187L9.455 13.383C9.175 13.575 8.792 13.368 8.792 13.029V8.638C8.792 8.299 9.175 8.093 9.455 8.284L12.756 10.48C13.007 10.642 13.007 11.025 12.756 11.187Z"></path>
                        </svg>
                        Watch Video
                      </a>
                    </div>
                  </blockquote>
                </li>
                <li
                  class="nlf-top full"
                  data-role="item"
                  data-item="i"
                  data-key="112692"
                >
                  <picture class="stretch-self auto rel">
                    <source
                      media="(max-width: 550px)"
                      srcset="
                      https://d2a92m131axhse.cloudfront.net/cms/thumbnails/34/500x420/media/vpics/Review-Posters/Shawn-Thomas_20180108083323.jpg
                    "
                    />
                    <source
                      media="(max-width: 1000px)"
                      srcset="
                      https://d2a92m131axhse.cloudfront.net/cms/thumbnails/34/950x550/media/vpics/Review-Posters/Shawn-Thomas_20180108083323.jpg
                    "
                    />
                    <img
                      alt=""
                      src="./assets_src/Shawn-Thomas_20180108083323.jpg"
                      loading="lazy"
                      role="presentation"
                    />
                  </picture>
                  <blockquote class="fit full rel">
                    “They’re unstoppable! They definitely have the experience
                    you need. They're fighting for these little people that
                    can’t handle themselves when a giant comes.
                    <strong>Almost like the David and Goliath.</strong> It’s an
                    amazing thing to see.”
                    <div class="nlf-middle">
                      <address>
                        Shawn Thomas
                        <small>Workplace Explosion Victim</small>
                      </address>
                      <a
                        href="javascript:void(0);"
                        class="btn el-tab"
                        title="Watch Video"
                        role="tab"
                        tabindex="0"
                        aria-selected="false"
                        aria-expanded="false"
                        aria-controls="Reviews_FeedV1WATCHVIDEO"
                        index="1"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          role="presentation"
                          class="fit"
                          data-use="/cms/svg/site/u1u1br5b8ke.24.2407091106502.svg#play"
                        >
                          <path
                            fill="none"
                            color="#1F33C8"
                            stroke="currentColor"
                            stroke-width="1"
                            d="M11.563 2.763C12.556 2.191 13.778 2.191 14.771 2.763L21.374 6.576C22.367 7.149 22.978 8.208 22.978 9.354V16.979C22.978 18.126 22.367 19.185 21.374 19.758L14.771 23.57C13.778 24.143 12.556 24.143 11.563 23.57L4.959 19.758C3.967 19.185 3.355 18.126 3.355 16.979V9.354C3.355 8.208 3.967 7.149 4.959 6.576L11.563 2.763Z"
                          ></path>
                          <path
                            fill="none"
                            color="#4258FF"
                            stroke="currentColor"
                            stroke-width="1"
                            d="M9.23 0.43C10.223-0.143 11.445-0.143 12.438 0.43L19.041 4.243C20.034 4.815 20.645 5.875 20.645 7.021V14.646C20.645 15.792 20.034 16.852 19.041 17.424L12.438 21.237C11.445 21.81 10.223 21.81 9.23 21.237L2.626 17.424C1.634 16.852 1.022 15.792 1.022 14.646V7.021C1.022 5.875 1.634 4.815 2.626 4.243L9.23 0.43Z"
                          ></path>
                          <path d="M12.756 11.187L9.455 13.383C9.175 13.575 8.792 13.368 8.792 13.029V8.638C8.792 8.299 9.175 8.093 9.455 8.284L12.756 10.48C13.007 10.642 13.007 11.025 12.756 11.187Z"></path>
                        </svg>
                        Watch Video
                      </a>
                    </div>
                  </blockquote>
                </li>
                <li
                  class="nlf-top full"
                  data-role="item"
                  data-item="i"
                  data-key="97405"
                >
                  <picture class="stretch-self auto rel">
                    <source
                      media="(max-width: 550px)"
                      srcset="
                      data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==
                    "
                      data-src="https://d2a92m131axhse.cloudfront.net/cms/thumbnails/34/500x420/images/video-thumbnails/terry-yount.2307051724115.jpg"
                    />
                    <source
                      media="(max-width: 1000px)"
                      srcset="
                      data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==
                    "
                      data-src="https://d2a92m131axhse.cloudfront.net/cms/thumbnails/34/950x550/images/video-thumbnails/terry-yount.2307051724115.jpg"
                    />
                    <img
                      alt=""
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      loading="lazy"
                      role="presentation"
                      data-src="https://d2a92m131axhse.cloudfront.net/cms/thumbnails/34/680x947/images/video-thumbnails/terry-yount.2307051724115.jpg"
                    />
                  </picture>
                  <blockquote class="fit full rel">
                    “I really feel like Arnold &amp; Itkin brought justice to my
                    family. Not only my family but many other families.
                    <strong>
                      It was just unreal how tirelessly they worked.
                    </strong>
                    Our trial lasted around 10 days. Every night, they were
                    working ‘til way after midnight. There were a couple nights
                    they never even slept. It was just amazing to me and my
                    family.”
                    <div class="nlf-middle">
                      <address>
                        Terry Yount
                        <small>Father of Drug Injury Victim</small>
                      </address>
                      <a
                        href="javascript:void(0);"
                        class="btn el-tab"
                        title="Watch Video"
                        role="tab"
                        tabindex="0"
                        aria-selected="false"
                        aria-expanded="false"
                        aria-controls="Reviews_FeedV1WATCHVIDEO"
                        index="2"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          role="presentation"
                          class="fit"
                          data-use="/cms/svg/site/u1u1br5b8ke.24.2407091106502.svg#play"
                        >
                          <path
                            fill="none"
                            color="#1F33C8"
                            stroke="currentColor"
                            stroke-width="1"
                            d="M11.563 2.763C12.556 2.191 13.778 2.191 14.771 2.763L21.374 6.576C22.367 7.149 22.978 8.208 22.978 9.354V16.979C22.978 18.126 22.367 19.185 21.374 19.758L14.771 23.57C13.778 24.143 12.556 24.143 11.563 23.57L4.959 19.758C3.967 19.185 3.355 18.126 3.355 16.979V9.354C3.355 8.208 3.967 7.149 4.959 6.576L11.563 2.763Z"
                          ></path>
                          <path
                            fill="none"
                            color="#4258FF"
                            stroke="currentColor"
                            stroke-width="1"
                            d="M9.23 0.43C10.223-0.143 11.445-0.143 12.438 0.43L19.041 4.243C20.034 4.815 20.645 5.875 20.645 7.021V14.646C20.645 15.792 20.034 16.852 19.041 17.424L12.438 21.237C11.445 21.81 10.223 21.81 9.23 21.237L2.626 17.424C1.634 16.852 1.022 15.792 1.022 14.646V7.021C1.022 5.875 1.634 4.815 2.626 4.243L9.23 0.43Z"
                          ></path>
                          <path d="M12.756 11.187L9.455 13.383C9.175 13.575 8.792 13.368 8.792 13.029V8.638C8.792 8.299 9.175 8.093 9.455 8.284L12.756 10.48C13.007 10.642 13.007 11.025 12.756 11.187Z"></path>
                        </svg>
                        Watch Video
                      </a>
                    </div>
                  </blockquote>
                </li>
              </ul>
              <div class="scroll-nav nlf-middle-end" data-role="arrows">
                <button
                  title="View previous item"
                  aria-label="View previous item"
                  data-action="Prev"
                >
                  <svg
                    viewBox="0 0 16 16"
                    role="presentation"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#left"
                  >
                    <path d="M12.202 0.3C12.01 0.108 11.749 0 11.477 0C11.205 0 10.943 0.108 10.751 0.3L3.781 7.266C3.588 7.458 3.48 7.719 3.48 7.991C3.48 8.263 3.588 8.524 3.781 8.716L10.751 15.682C10.941 15.882 11.206 15.997 11.482 16C11.759 16.003 12.025 15.895 12.22 15.698C12.415 15.503 12.524 15.237 12.52 14.96C12.516 14.684 12.4 14.421 12.2 14.23L5.955 7.991L12.2 1.751C12.392 1.559 12.502 1.299 12.502 1.026C12.503 0.754 12.394 0.493 12.202 0.3L12.202 0.3Z"></path>
                  </svg>
                </button>
                <button
                  title="View next item"
                  aria-label="View next item"
                  data-action="Next"
                >
                  <svg
                    viewBox="0 0 16 16"
                    role="presentation"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#right"
                  >
                    <path d="M3.798 0.3C3.99 0.108 4.251 0 4.523 0C4.795 0 5.057 0.108 5.249 0.3L12.219 7.266C12.412 7.458 12.52 7.719 12.52 7.991C12.52 8.263 12.412 8.524 12.219 8.716L5.249 15.682C5.059 15.882 4.794 15.997 4.518 16C4.241 16.003 3.975 15.895 3.78 15.698C3.585 15.503 3.476 15.237 3.48 14.96C3.484 14.684 3.6 14.421 3.8 14.23L10.045 7.991L3.8 1.751C3.608 1.559 3.498 1.299 3.498 1.026C3.497 0.754 3.606 0.493 3.798 0.3L3.798 0.3Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <a
              href="https://www.arnolditkin.com/video-center/client-testimonials/"
              class="btn"
            >
              Our Testimonials
            </a>
          </div>
          <div
            class="popup el-panel"
            data-item="si"
            data-key="103855"
            tabindex="0"
            role="tabpanel"
            aria-hidden="true"
            id="Reviews_FeedV1WATCHVIDEO"
          >
            <svg
              viewBox="0 0 16 16"
              class="el-sec-tab"
              aria-label="Close Popup"
              data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#close"
              role="tab"
              tabindex="0"
              aria-selected="false"
              aria-expanded="false"
              aria-controls="Reviews_FeedV1WATCHVIDEO"
              index="0"
            >
              <path d="M16 1.458L14.546 0.004L8 6.546L1.454 0.004L0 1.458L6.546 8L0 14.542L1.454 15.996L8 9.454L14.546 15.996L16 14.542L9.455 8L16 1.458Z"></path>
            </svg>
            <video
              type="video/mp4"
              controls=""
              preload="metadata"
              src="blob:https://www.arnolditkin.com/e20c229b-df3f-4efd-84a8-e42526c1f441"
              data-src="https://d2a92m131axhse.cloudfront.net/cms/thumbnails/34/820x475/images/video-thumbnails/mildred-screenshot.2307051724072.jpg"
              data-replace="false"
            ></video>
          </div>
          <div
            class="popup el-panel"
            data-item="si"
            data-key="112692"
            tabindex="0"
            role="tabpanel"
            aria-hidden="true"
            id="Reviews_FeedV1WATCHVIDEO"
          >
            <svg
              viewBox="0 0 16 16"
              class="el-sec-tab"
              aria-label="Close Popup"
              data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#close"
              role="tab"
              tabindex="0"
              aria-selected="false"
              aria-expanded="false"
              aria-controls="Reviews_FeedV1WATCHVIDEO"
              index="1"
            >
              <path d="M16 1.458L14.546 0.004L8 6.546L1.454 0.004L0 1.458L6.546 8L0 14.542L1.454 15.996L8 9.454L14.546 15.996L16 14.542L9.455 8L16 1.458Z"></path>
            </svg>
            <video
              type="video/mp4"
              controls=""
              preload="metadata"
              src="blob:https://www.arnolditkin.com/c8637186-7f93-4001-8b3e-1dbce00fda21"
              data-src="https://d2a92m131axhse.cloudfront.net/cms/thumbnails/34/820x475/media/vpics/Review-Posters/Shawn-Thomas_20180108083323.jpg"
              data-replace="false"
            ></video>
          </div>
          <div
            class="popup el-panel"
            data-item="si"
            data-key="97405"
            tabindex="0"
            role="tabpanel"
            aria-hidden="true"
            id="Reviews_FeedV1WATCHVIDEO"
          >
            <svg
              viewBox="0 0 16 16"
              class="el-sec-tab"
              aria-label="Close Popup"
              data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#close"
              role="tab"
              tabindex="0"
              aria-selected="false"
              aria-expanded="false"
              aria-controls="Reviews_FeedV1WATCHVIDEO"
              index="2"
            >
              <path d="M16 1.458L14.546 0.004L8 6.546L1.454 0.004L0 1.458L6.546 8L0 14.542L1.454 15.996L8 9.454L14.546 15.996L16 14.542L9.455 8L16 1.458Z"></path>
            </svg>
            <video
              type="video/mp4"
              controls=""
              preload="metadata"
              src="blob:https://www.arnolditkin.com/399c46ad-df4d-43c1-bc5c-6cafc2df0221"
              data-src="https://d2a92m131axhse.cloudfront.net/cms/thumbnails/34/820x475/images/video-thumbnails/terry-yount.2307051724115.jpg"
              data-replace="false"
            ></video>
          </div>
        </section>
        <section
          id="Awards_Media"
          class="awards-media dark-bg"
          universal_="true"
        >
          <div class="nlf-middle-reverse anm" data-onvisible="anm">
            <figure class="ai_clip fit rel">
              <svg style={{ width: 0, height: 0 }}>
                <defs>
                  <clippath id="AIclip" clipPathUnits="objectBoundingBox">
                    <path
                      transform="scale(0.00067,0.00115)"
                      d="M1422.2,128.1L1492,0h-445.1l69.7,128.1V556l171,308.5H1492l-69.8-128.1V128.1z M735.2,0H425.6l55,99.3
					L115.2,758.8L0,864.6h315.5l-76.4-113.1l73.8-133.2h455.3l72.6,131l-77.9,115.3h451.5L735.2,0z M371.1,513.3l169.5-305.8L710,513.3
					H371.1z"
                    ></path>
                  </clippath>
                </defs>
              </svg>
              <picture class="bg">
                <img
                  class="full"
                  src="./assets_src/wya-callout-bg.2305162205243.jpg"
                  alt=""
                  role="presentation"
                />
              </picture>
            </figure>
            <header class="auto">
              <h2>
                <span>No Matter</span>
                <strong>Who You Ask</strong>
              </h2>
              <p>
                We've consistently received the legal industry's
                <strong>highest honors</strong>, won the nation's largest
                results, and been repeatedly featured in both local and national
                news publications. We're proud of these honors and deeply
                grateful to the clients who continually put their trust in our
                team.
              </p>
            </header>
          </div>
          <div class="awards text-center anm" data-onvisible="anm">
            <span class="blk">Awards &amp; Honors</span>
            <ul class="nlf-wrap">
              <li
                class="fourth auto nlf-middle-center anm"
                data-onvisible="anm"
              >
                <img
                  src="./assets_src/best-law-firm-23.2305080910016.png"
                  alt="Best Lawyers - Best Law Firms 2023"
                  loading="lazy"
                  class=""
                />
              </li>
              <li
                class="fourth auto nlf-middle-center anm"
                data-onvisible="anm"
              >
                <img
                  src="./assets_src/best-law-firm-22.2305080910015.png"
                  alt="Best Lawyers - Best Law Firms 2022"
                  loading="lazy"
                  class=""
                />
              </li>
              <li
                class="fourth auto nlf-middle-center anm"
                data-onvisible="anm"
              >
                <img
                  src="./assets_src/best-law-firm-21.2305080910018.png"
                  alt="Best Lawyers - Best Law Firms 2021"
                  loading="lazy"
                  class=""
                />
              </li>
              <li
                class="fourth auto nlf-middle-center anm"
                data-onvisible="anm"
              >
                <img
                  src="./assets_src/best-law-firm-20.2305080910014.png"
                  alt="Best Lawyers - Best Law Firms 2020"
                  loading="lazy"
                  class=""
                />
              </li>
              <li
                class="fourth auto nlf-middle-center anm"
                data-onvisible="anm"
              >
                <img
                  src="./assets_src/best-law-firm-19.2305080910014.png"
                  alt="Best Lawyers - Best Law Firms 2019"
                  loading="lazy"
                  class=""
                />
              </li>
              <li
                class="fourth auto nlf-middle-center anm"
                data-onvisible="anm"
              >
                <img
                  src="./assets_src/best-lawyers.2305080910012.jpg"
                  alt="Best Lawyers 2021"
                  loading="lazy"
                  class=""
                />
              </li>
              <li
                class="fourth auto nlf-middle-center anm"
                data-onvisible="anm"
              >
                <img
                  src="./assets_src/super-lawyers.2305080910013.png"
                  alt="SuperLawyers"
                  loading="lazy"
                  class=""
                />
              </li>
              <li
                class="fourth auto nlf-middle-center anm"
                data-onvisible="anm"
              >
                <img
                  src="./assets_src/lawdragon.2305080910013.jpg"
                  alt="LawDragon - 500 Leading Lawyers 2020"
                  loading="lazy"
                  class=""
                />
              </li>
              <li
                class="fourth auto nlf-middle-center anm"
                data-onvisible="anm"
              >
                <img
                  src="./assets_src/inner-circle.2305080910013.png"
                  alt="Inner Circle of Advocates"
                  loading="lazy"
                  class=""
                />
              </li>
              <li
                class="fourth auto nlf-middle-center anm"
                data-onvisible="anm"
              >
                <img
                  src="./assets_src/top-100.2305080910013.png"
                  alt="Top 100 Trial Lawyers"
                  loading="lazy"
                  class=""
                />
              </li>
              <li
                class="fourth auto nlf-middle-center anm"
                data-onvisible="anm"
              >
                <img
                  src="./assets_src/texas-lawyers.2305080910018.png"
                  alt="Texas Lawyer - Top Verdicts &amp; Settlements 2019"
                  loading="lazy"
                  class=""
                />
              </li>
              <li
                class="fourth auto nlf-middle-center anm"
                data-onvisible="anm"
              >
                <img
                  src="./assets_src/best-lawyers.2305080910012.jpg"
                  alt="Best Lawyers in America"
                  loading="lazy"
                  class=""
                />
              </li>
            </ul>
            <a href="https://www.arnolditkin.com/awards-honors/" class="btn">
              Our Awards
            </a>
          </div>
          <div
            class="media text-center ui-repeater anm"
            id="ctl00"
            data-role="scroller"
            data-onvisible="anm"
          >
            <span class="blk">Media Mentions</span>
            <div data-role="container">
              <ul data-role="list">
                <li data-role="item" data-item="i" data-key="5">
                  <img
                    src="./assets_src/cnn.2010041729242.png"
                    alt="CNN"
                    loading="lazy"
                    class=""
                  />
                </li>
                <li data-role="item" data-item="i" data-key="4">
                  <img
                    src="./assets_src/forbes.2010041729243.png"
                    alt="Forbes"
                    loading="lazy"
                    class=""
                  />
                </li>
                <li data-role="item" data-item="i" data-key="7">
                  <img
                    src="./assets_src/abc.2305081004573.png"
                    alt="ABC"
                    loading="lazy"
                    class=""
                  />
                </li>
                <li data-role="item" data-item="i" data-key="8">
                  <img
                    src="./assets_src/wsj.2305081004573.png"
                    alt="Wall Street Journal"
                    loading="lazy"
                    class=""
                  />
                </li>
                <li data-role="item" data-item="i" data-key="590">
                  <img
                    src="./assets_src/cbs-logo.2305081004573.png"
                    alt="CBS"
                    loading="lazy"
                    class=""
                  />
                </li>
                <li data-role="item" data-item="i" data-key="9">
                  <img
                    src="./assets_src/usa-today.2305081004573.png"
                    alt="USA Today"
                    loading="lazy"
                    class=""
                  />
                </li>
                <li data-role="item" data-item="i" data-key="10">
                  <img
                    src="./assets_src/reuters.2305081008032.png"
                    alt="Reuters"
                    loading="lazy"
                    class=""
                  />
                </li>
                <li data-role="item" data-item="i" data-key="13">
                  <img
                    src="./assets_src/nbc-news.2305081008032.png"
                    alt="NBC News"
                    loading="lazy"
                    class=""
                  />
                </li>
              </ul>
              <div
                class="thumb-nav nlf-middle-center"
                data-role="thumbList"
              ></div>
            </div>
            <a href="https://www.arnolditkin.com/in-the-news/" class="btn">
              Featured News
            </a>
          </div>
        </section>
        <section
          id="Practices_V1"
          class="practices v1 dark-bg ui-repeater anm"
          universal_="true"
          data-onvisible="anm"
        >
          <header class="nlf-top h_gap block-1000">
            <h2 class="three-fifths">
              <span>Our Areas</span>
              <strong class="blk fit">of Practice</strong>
            </h2>
            <div class="two-fifths">
              <p>
                Our legal team is honored to stand up for the rights of those
                who have been severely injured, as well as their families.
              </p>
              <a href="https://www.arnolditkin.com/practice-areas/" class="btn">
                All Cases We Handle
              </a>
            </div>
          </header>
          <nav class="nlf block-550">
            <a
              href="https://www.arnolditkin.com/personal-injury/"
              class="auto rel nlf-top-column-between"
              data-item="i"
              data-key="16589"
            >
              <video
                class="bg hide-1440"
                type="video/mp4"
                playsinline=""
                loop=""
                muted=""
                preload="metadata"
                role="presentation"
                src="blob:https://www.arnolditkin.com/17223310-8da8-414a-95c7-1afb6cfa46a6"
                data-replace="false"
              ></video>
              <picture class="bg show-1440">
                <source
                  media="(max-width: 550px)"
                  srcset="
                  https://d2a92m131axhse.cloudfront.net/cms/thumbnails/24/550x145/assets/services/personal-injury.1911141631518.jpg
                "
                />
                <source
                  media="(max-width: 1000px)"
                  srcset="
                  https://d2a92m131axhse.cloudfront.net/cms/thumbnails/24/395x175/assets/services/personal-injury.1911141631518.jpg
                "
                />
                <img
                  src="./assets_src/personal-injury.1911141631518.jpg"
                  alt=""
                  role="presentation"
                  loading="lazy"
                />
              </picture>
              <strong class="blk fit rel">Personal Injury</strong>
              <div class="content auto nlf-column-top-end rel hide-1000">
                <h3 class="fit">Personal Injury</h3>
                <div class="ui-scroll">
                  <p>
                    When people are hurt, they deserve the highest quality
                    medical care and the&nbsp;chance to move forward with their
                    lives. Unfortunately, the opposite often happens. Accident
                    victims get ignored, injuries turn into disabilities, major
                    expenses turn into inescapable debt, and grieving families
                    fail under the pressure. Our firm fights to break the cycle
                    by holding at-fault companies accountable to those they've
                    hurt.&nbsp;
                  </p>
                </div>
                <span class="simple-btn">
                  Learn more
                  <svg
                    viewBox="0 0 16 16"
                    role="presentation"
                    class="fit"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#right"
                  >
                    <path d="M3.798 0.3C3.99 0.108 4.251 0 4.523 0C4.795 0 5.057 0.108 5.249 0.3L12.219 7.266C12.412 7.458 12.52 7.719 12.52 7.991C12.52 8.263 12.412 8.524 12.219 8.716L5.249 15.682C5.059 15.882 4.794 15.997 4.518 16C4.241 16.003 3.975 15.895 3.78 15.698C3.585 15.503 3.476 15.237 3.48 14.96C3.484 14.684 3.6 14.421 3.8 14.23L10.045 7.991L3.8 1.751C3.608 1.559 3.498 1.299 3.498 1.026C3.497 0.754 3.606 0.493 3.798 0.3L3.798 0.3Z"></path>
                  </svg>
                </span>
              </div>{" "}
            </a>
            <a
              href="https://www.arnolditkin.com/offshore-injuries/"
              class="auto rel nlf-top-column-between"
              data-item="i"
              data-key="16594"
            >
              <video
                class="bg hide-1440"
                type="video/mp4"
                playsinline=""
                loop=""
                muted=""
                preload="metadata"
                role="presentation"
                src="blob:https://www.arnolditkin.com/e36599a0-87e5-4180-9fe7-721e063db69a"
                data-replace="false"
              ></video>
              <picture class="bg show-1440">
                <source
                  media="(max-width: 550px)"
                  srcset="
                  https://d2a92m131axhse.cloudfront.net/cms/thumbnails/24/550x145/assets/services/offshore-injury.1911141632292.jpg
                "
                />
                <source
                  media="(max-width: 1000px)"
                  srcset="
                  https://d2a92m131axhse.cloudfront.net/cms/thumbnails/24/395x175/assets/services/offshore-injury.1911141632292.jpg
                "
                />
                <img
                  src="./assets_src/offshore-injury.1911141632292.jpg"
                  alt=""
                  role="presentation"
                  loading="lazy"
                />
              </picture>
              <strong class="blk fit rel">Offshore Injuries</strong>
              <div class="content auto nlf-column-top-end rel hide-1000">
                <h3 class="fit">Offshore Injuries</h3>
                <div class="ui-scroll">
                  <p>
                    The offshore industry has long been regarded as one of the
                    most dangerous trades in the world.&nbsp;It’s been that way
                    for centuries. But, while tools, equipment,&nbsp;and vessels
                    have become far more advanced, we cannot say the same about
                    the safety of offshore work. When big companies put profits
                    ahead of workers' safety and people get hurt,&nbsp;we fight
                    for survivors and families to recover everything they need
                    to move forward.
                  </p>
                </div>
                <span class="simple-btn">
                  Learn more
                  <svg
                    viewBox="0 0 16 16"
                    role="presentation"
                    class="fit"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#right"
                  >
                    <path d="M3.798 0.3C3.99 0.108 4.251 0 4.523 0C4.795 0 5.057 0.108 5.249 0.3L12.219 7.266C12.412 7.458 12.52 7.719 12.52 7.991C12.52 8.263 12.412 8.524 12.219 8.716L5.249 15.682C5.059 15.882 4.794 15.997 4.518 16C4.241 16.003 3.975 15.895 3.78 15.698C3.585 15.503 3.476 15.237 3.48 14.96C3.484 14.684 3.6 14.421 3.8 14.23L10.045 7.991L3.8 1.751C3.608 1.559 3.498 1.299 3.498 1.026C3.497 0.754 3.606 0.493 3.798 0.3L3.798 0.3Z"></path>
                  </svg>
                </span>
              </div>{" "}
            </a>
            <a
              href="https://www.arnolditkin.com/plant-refinery-accidents/"
              class="auto rel nlf-top-column-between"
              data-item="i"
              data-key="16591"
            >
              <video
                class="bg hide-1440"
                type="video/mp4"
                playsinline=""
                loop=""
                muted=""
                preload="metadata"
                role="presentation"
                src="blob:https://www.arnolditkin.com/f7f16109-786c-403c-a5c9-16f4336d7170"
                data-replace="false"
              ></video>
              <picture class="bg show-1440">
                <source
                  media="(max-width: 550px)"
                  srcset="
                  https://d2a92m131axhse.cloudfront.net/cms/thumbnails/24/550x145/assets/services/plant-refinery-accidents.1911141631530.jpg
                "
                />
                <source
                  media="(max-width: 1000px)"
                  srcset="
                  https://d2a92m131axhse.cloudfront.net/cms/thumbnails/24/395x175/assets/services/plant-refinery-accidents.1911141631530.jpg
                "
                />
                <img
                  src="./assets_src/plant-refinery-accidents.1911141631530.jpg"
                  alt=""
                  role="presentation"
                  loading="lazy"
                />
              </picture>
              <strong class="blk fit rel">Plant Accidents</strong>
              <div class="content auto nlf-column-top-end rel hide-1000">
                <h3 class="fit">Plant Accidents</h3>
                <div class="ui-scroll">
                  <p>
                    Plant and refinery workers are vital to American industry,
                    but&nbsp;fewer and fewer employers are willing to invest in
                    their workers' well-being with&nbsp;basic safety equipment,
                    training, and maintenance. As a result, plant accidents and
                    refinery explosions have become far more common. It
                    is&nbsp;our duty to fight for workers who have been injured
                    or killed by profit-driven employers. It is our calling to
                    make sure workers and their families are taken care of for
                    the rest of their lives.&nbsp;
                  </p>
                </div>
                <span class="simple-btn">
                  Learn more
                  <svg
                    viewBox="0 0 16 16"
                    role="presentation"
                    class="fit"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#right"
                  >
                    <path d="M3.798 0.3C3.99 0.108 4.251 0 4.523 0C4.795 0 5.057 0.108 5.249 0.3L12.219 7.266C12.412 7.458 12.52 7.719 12.52 7.991C12.52 8.263 12.412 8.524 12.219 8.716L5.249 15.682C5.059 15.882 4.794 15.997 4.518 16C4.241 16.003 3.975 15.895 3.78 15.698C3.585 15.503 3.476 15.237 3.48 14.96C3.484 14.684 3.6 14.421 3.8 14.23L10.045 7.991L3.8 1.751C3.608 1.559 3.498 1.299 3.498 1.026C3.497 0.754 3.606 0.493 3.798 0.3L3.798 0.3Z"></path>
                  </svg>
                </span>
              </div>{" "}
            </a>
            <a
              href="https://www.arnolditkin.com/houston-truck-accident-lawyer/"
              class="auto rel nlf-top-column-between"
              data-item="i"
              data-key="16604"
            >
              <video
                class="bg hide-1440"
                type="video/mp4"
                playsinline=""
                loop=""
                muted=""
                preload="metadata"
                role="presentation"
                src="blob:https://www.arnolditkin.com/2ff93d58-79a8-43ff-b228-99f369bcbcba"
                data-replace="false"
              ></video>
              <picture class="bg show-1440">
                <source
                  media="(max-width: 550px)"
                  srcset="
                  https://d2a92m131axhse.cloudfront.net/cms/thumbnails/24/550x145/assets/services/truck-accidents.1911141632124.jpg
                "
                />
                <source
                  media="(max-width: 1000px)"
                  srcset="
                  https://d2a92m131axhse.cloudfront.net/cms/thumbnails/24/395x175/assets/services/truck-accidents.1911141632124.jpg
                "
                />
                <img
                  src="./assets_src/truck-accidents.1911141632124.jpg"
                  alt=""
                  role="presentation"
                  loading="lazy"
                />
              </picture>
              <strong class="blk fit rel">Truck Accidents</strong>
              <div class="content auto nlf-column-top-end rel hide-1000">
                <h3 class="fit">Truck Accidents</h3>
                <div class="ui-scroll">
                  <p>
                    Truck accidents are devastating. At tens of thousands of
                    pounds and speeds of 50 mph or more, commercial trucks
                    represent some of the least regulated and most dangerous
                    vehicles on the road. Trucking and shipping companies have
                    refused to take responsibility, and motorists and truckers
                    alike have paid the price.&nbsp;Arnold &amp; Itkin&nbsp;has
                    been fighting back. By holding negligent trucking companies
                    responsible, we've been able to help our clients recover
                    while making the roads safer.
                  </p>
                </div>
                <span class="simple-btn">
                  Learn more
                  <svg
                    viewBox="0 0 16 16"
                    role="presentation"
                    class="fit"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#right"
                  >
                    <path d="M3.798 0.3C3.99 0.108 4.251 0 4.523 0C4.795 0 5.057 0.108 5.249 0.3L12.219 7.266C12.412 7.458 12.52 7.719 12.52 7.991C12.52 8.263 12.412 8.524 12.219 8.716L5.249 15.682C5.059 15.882 4.794 15.997 4.518 16C4.241 16.003 3.975 15.895 3.78 15.698C3.585 15.503 3.476 15.237 3.48 14.96C3.484 14.684 3.6 14.421 3.8 14.23L10.045 7.991L3.8 1.751C3.608 1.559 3.498 1.299 3.498 1.026C3.497 0.754 3.606 0.493 3.798 0.3L3.798 0.3Z"></path>
                  </svg>
                </span>
              </div>{" "}
            </a>
            <a
              href="https://www.arnolditkin.com/catastrophic-injuries/"
              class="auto rel nlf-top-column-between"
              data-item="i"
              data-key="16602"
            >
              <video
                class="bg hide-1440"
                type="video/mp4"
                playsinline=""
                loop=""
                muted=""
                preload="metadata"
                role="presentation"
                src="blob:https://www.arnolditkin.com/7c82c61c-44c7-4169-b2f9-4d6d706a7d9e"
                data-replace="false"
              ></video>
              <picture class="bg show-1440">
                <source
                  media="(max-width: 550px)"
                  srcset="
                  https://d2a92m131axhse.cloudfront.net/cms/thumbnails/24/550x145/assets/services/catastrophic-injuries.1911141631141.jpg
                "
                />
                <source
                  media="(max-width: 1000px)"
                  srcset="
                  https://d2a92m131axhse.cloudfront.net/cms/thumbnails/24/395x175/assets/services/catastrophic-injuries.1911141631141.jpg
                "
                />
                <img
                  src="./assets_src/catastrophic-injuries.1911141631141.jpg"
                  alt=""
                  role="presentation"
                  loading="lazy"
                />
              </picture>
              <strong class="blk fit rel">Catastrophic Injuries</strong>
              <div class="content auto nlf-column-top-end rel hide-1000">
                <h3 class="fit">Catastrophic Injuries</h3>
                <div class="ui-scroll">
                  <p>
                    Catastrophic injuries aren't defined by pain,&nbsp;damage,
                    or even where the injury took place. They are defined by how
                    much they change our lives. From requiring specialized
                    equipment to altering our relationship with&nbsp;our own
                    bodies, catastrophic injuries are life-altering to the
                    core⁠—and the companies at fault&nbsp;should be held
                    responsible. Arnold &amp; Itkin is the premier law firm
                    advocating&nbsp;for people whose lives have been destroyed
                    by corporate negligence.
                  </p>
                </div>
                <span class="simple-btn">
                  Learn more
                  <svg
                    viewBox="0 0 16 16"
                    role="presentation"
                    class="fit"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#right"
                  >
                    <path d="M3.798 0.3C3.99 0.108 4.251 0 4.523 0C4.795 0 5.057 0.108 5.249 0.3L12.219 7.266C12.412 7.458 12.52 7.719 12.52 7.991C12.52 8.263 12.412 8.524 12.219 8.716L5.249 15.682C5.059 15.882 4.794 15.997 4.518 16C4.241 16.003 3.975 15.895 3.78 15.698C3.585 15.503 3.476 15.237 3.48 14.96C3.484 14.684 3.6 14.421 3.8 14.23L10.045 7.991L3.8 1.751C3.608 1.559 3.498 1.299 3.498 1.026C3.497 0.754 3.606 0.493 3.798 0.3L3.798 0.3Z"></path>
                  </svg>
                </span>
              </div>{" "}
            </a>
            <a
              href="https://www.arnolditkin.com/product-liability/"
              class="auto rel nlf-top-column-between"
              data-item="i"
              data-key="16590"
            >
              <video
                class="bg hide-1440"
                type="video/mp4"
                playsinline=""
                loop=""
                muted=""
                preload="metadata"
                role="presentation"
                src="blob:https://www.arnolditkin.com/4b69c472-dd58-4f5c-803a-2842b02324cc"
                data-replace="false"
              ></video>
              <picture class="bg show-1440">
                <source
                  media="(max-width: 550px)"
                  srcset="
                  https://d2a92m131axhse.cloudfront.net/cms/thumbnails/24/550x145/assets/services/product-liability.1911141631541.jpg
                "
                />
                <source
                  media="(max-width: 1000px)"
                  srcset="
                  https://d2a92m131axhse.cloudfront.net/cms/thumbnails/24/395x175/assets/services/product-liability.1911141631541.jpg
                "
                />
                <img
                  src="./assets_src/product-liability.1911141631541.jpg"
                  alt=""
                  role="presentation"
                  loading="lazy"
                />
              </picture>
              <strong class="blk fit rel">Product Liability</strong>
              <div class="content auto nlf-column-top-end rel hide-1000">
                <h3 class="fit">Product Liability</h3>
                <div class="ui-scroll">
                  <p>
                    Companies have a simple duty: make sure whatever they
                    produce is safe to use. However, in a mad rush to get to
                    market, some corporations fail to test their products or
                    ensure that they are advertised safely. The result? Severe
                    injury—even fatal injury. When companies hurt consumers with
                    unsafe products, we step&nbsp;up to hold them accountable.
                  </p>
                </div>
                <span class="simple-btn">
                  Learn more
                  <svg
                    viewBox="0 0 16 16"
                    role="presentation"
                    class="fit"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#right"
                  >
                    <path d="M3.798 0.3C3.99 0.108 4.251 0 4.523 0C4.795 0 5.057 0.108 5.249 0.3L12.219 7.266C12.412 7.458 12.52 7.719 12.52 7.991C12.52 8.263 12.412 8.524 12.219 8.716L5.249 15.682C5.059 15.882 4.794 15.997 4.518 16C4.241 16.003 3.975 15.895 3.78 15.698C3.585 15.503 3.476 15.237 3.48 14.96C3.484 14.684 3.6 14.421 3.8 14.23L10.045 7.991L3.8 1.751C3.608 1.559 3.498 1.299 3.498 1.026C3.497 0.754 3.606 0.493 3.798 0.3L3.798 0.3Z"></path>
                  </svg>
                </span>
              </div>{" "}
            </a>
            <a
              href="https://www.arnolditkin.com/industrial-injury/"
              class="auto rel nlf-top-column-between"
              data-item="i"
              data-key="16592"
            >
              <video
                class="bg hide-1440"
                type="video/mp4"
                playsinline=""
                loop=""
                muted=""
                preload="metadata"
                role="presentation"
                src="blob:https://www.arnolditkin.com/002445db-cd15-4d58-a1f0-982d43e6a2a9"
                data-replace="false"
              ></video>
              <picture class="bg show-1440">
                <source
                  media="(max-width: 550px)"
                  srcset="
                  https://d2a92m131axhse.cloudfront.net/cms/thumbnails/24/550x145/assets/services/industry-injury.1911141631258.jpg
                "
                />
                <source
                  media="(max-width: 1000px)"
                  srcset="
                  https://d2a92m131axhse.cloudfront.net/cms/thumbnails/24/395x175/assets/services/industry-injury.1911141631258.jpg
                "
                />
                <img
                  src="./assets_src/industry-injury.1911141631258.jpg"
                  alt=""
                  role="presentation"
                  loading="lazy"
                />
              </picture>
              <strong class="blk fit rel">Industrial Injuries</strong>
              <div class="content auto nlf-column-top-end rel hide-1000">
                <h3 class="fit">Industrial Injuries</h3>
                <div class="ui-scroll">
                  <p>
                    For over 100 years, industrial work has been a dangerous way
                    for people to earn a living. Aging factories and poor safety
                    policies have made industrial workers some of the most
                    at-risk employees worldwide. From chemical refineries to
                    construction sites, workers all over the United
                    States&nbsp;are getting injured by employers who can’t be
                    bothered to keep them safe. Arnold &amp; Itkin has been
                    fighting back. When industrial workers suffer harm due to
                    company negligence, we make sure they're taken care of.
                  </p>
                </div>
                <span class="simple-btn">
                  Learn more
                  <svg
                    viewBox="0 0 16 16"
                    role="presentation"
                    class="fit"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#right"
                  >
                    <path d="M3.798 0.3C3.99 0.108 4.251 0 4.523 0C4.795 0 5.057 0.108 5.249 0.3L12.219 7.266C12.412 7.458 12.52 7.719 12.52 7.991C12.52 8.263 12.412 8.524 12.219 8.716L5.249 15.682C5.059 15.882 4.794 15.997 4.518 16C4.241 16.003 3.975 15.895 3.78 15.698C3.585 15.503 3.476 15.237 3.48 14.96C3.484 14.684 3.6 14.421 3.8 14.23L10.045 7.991L3.8 1.751C3.608 1.559 3.498 1.299 3.498 1.026C3.497 0.754 3.606 0.493 3.798 0.3L3.798 0.3Z"></path>
                  </svg>
                </span>
              </div>{" "}
            </a>
            <a
              href="https://www.arnolditkin.com/medical-pharmaceutical-injury/"
              class="auto rel nlf-top-column-between"
              data-item="i"
              data-key="16599"
            >
              <video
                class="bg hide-1440"
                type="video/mp4"
                playsinline=""
                loop=""
                muted=""
                preload="metadata"
                role="presentation"
                src="blob:https://www.arnolditkin.com/4b52142c-7737-40b4-ae0e-1dbd93496eb5"
                data-replace="false"
              ></video>

              <picture class="bg show-1440">
                <source
                  media="(max-width: 550px)"
                  srcset="
                  https://d2a92m131axhse.cloudfront.net/cms/thumbnails/24/550x145/assets/services/drug-medical.1911141631163.jpg
                "
                />
                <source
                  media="(max-width: 1000px)"
                  srcset="
                  https://d2a92m131axhse.cloudfront.net/cms/thumbnails/24/395x175/assets/services/drug-medical.1911141631163.jpg
                "
                />
                <img
                  src="./assets_src/drug-medical.1911141631163.jpg"
                  alt=""
                  role="presentation"
                  loading="lazy"
                />
              </picture>
              <strong class="blk fit rel">Medical Injuries</strong>
              <div class="content auto nlf-column-top-end rel hide-1000">
                <h3 class="fit">Medical Injuries</h3>
                <div class="ui-scroll">
                  <p>
                    Many law firms have taken Big Pharma to task for their
                    negligent manufacturing and marketing of vital medications.
                    It’s not hard to file a lawsuit. But few firms have beaten
                    pharmaceutical giants in the courtroom, commanding billions
                    in verdicts and settlements. Arnold &amp; Itkin is the firm
                    people call when they're facing industry giants.
                  </p>
                </div>
                <span class="simple-btn">
                  Learn more
                  <svg
                    viewBox="0 0 16 16"
                    role="presentation"
                    class="fit"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#right"
                  >
                    <path d="M3.798 0.3C3.99 0.108 4.251 0 4.523 0C4.795 0 5.057 0.108 5.249 0.3L12.219 7.266C12.412 7.458 12.52 7.719 12.52 7.991C12.52 8.263 12.412 8.524 12.219 8.716L5.249 15.682C5.059 15.882 4.794 15.997 4.518 16C4.241 16.003 3.975 15.895 3.78 15.698C3.585 15.503 3.476 15.237 3.48 14.96C3.484 14.684 3.6 14.421 3.8 14.23L10.045 7.991L3.8 1.751C3.608 1.559 3.498 1.299 3.498 1.026C3.497 0.754 3.606 0.493 3.798 0.3L3.798 0.3Z"></path>
                  </svg>
                </span>
              </div>
            </a>
          </nav>
        </section>
        <section
          id="FAQs_V1"
          class="faqs v1 el-tab-box dark-bg ui-repeater anm"
          universal_="true"
          data-closing="true"
          data-slider="true"
          data-onvisible="anm"
        >
          <div class="thin">
            <header>
              <h2>
                <span>Common</span>
                <strong>Questions</strong>
              </h2>
            </header>
            <ul
              itemscope=""
              itemtype="https://schema.org/FAQPage"
              role="tablist"
            >
              <li
                itemscope=""
                itemprop="mainEntity"
                itemtype="https://schema.org/Question"
                data-item="i"
                data-key="34555"
              >
                <h3
                  class="nlf-middle-between h_gap-sm el-tab rel"
                  itemprop="name"
                  role="tab"
                  tabindex="0"
                  aria-selected="false"
                  aria-expanded="false"
                  aria-controls="FAQs_V1DoIHaveaPersonalInjuryLawsuit"
                  index="0"
                >
                  Do I Have a Personal Injury Lawsuit?
                  <svg
                    viewBox="0 0 16 16"
                    class="fit"
                    role="presentation"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#down"
                  >
                    <path d="M15.7 3.798C15.892 3.99 16 4.251 16 4.523C16 4.795 15.892 5.056 15.7 5.249L8.734 12.219C8.542 12.411 8.281 12.52 8.009 12.52C7.737 12.52 7.476 12.411 7.284 12.219L0.319 5.249C0.118 5.058 0.003 4.794 0 4.518C-0.003 4.241 0.105 3.975 0.301 3.78C0.497 3.584 0.763 3.476 1.039 3.48C1.316 3.484 1.579 3.599 1.77 3.8L8.009 10.045L14.249 3.8C14.441 3.607 14.701 3.498 14.974 3.498C15.246 3.497 15.507 3.605 15.7 3.798L15.7 3.798Z"></path>
                  </svg>
                </h3>
                <div
                  class="content el-panel"
                  itemscope=""
                  itemprop="acceptedAnswer"
                  itemtype="https://schema.org/Answer"
                  role="tabpanel"
                  aria-hidden="true"
                  id="FAQs_V1DoIHaveaPersonalInjuryLawsuit"
                >
                  <div itemprop="text">
                    Wondering if you have a
                    <a href="https://www.arnolditkin.com/personal-injury/">
                      personal injury lawsuit
                    </a>
                    ? First, you need to determine if your injury was caused by
                    someone else’s negligence or carelessness. This could be
                    anything from a business not keeping their premises safe,
                    leading to a fall, to a defective product causing harm.
                    Second, you need to show this negligence directly led to
                    your injuries. For instance, if a poorly maintained piece of
                    equipment at work resulted in an accident, that connection
                    needs to be clear. Finally, you need to prove that due to
                    your injury, you suffered actual damages such as medical
                    bills, lost income, or pain and suffering. All personal
                    injury lawsuits are unique, so it’s important to talk to an
                    experienced Texas personal injury lawyer about what happened
                    to you. They can evaluate your case and guide you through
                    the legal process, advocating on your behalf. We encourage
                    you to get in touch with an attorney immediately to learn
                    more.
                  </div>
                </div>
              </li>
              <li
                itemscope=""
                itemprop="mainEntity"
                itemtype="https://schema.org/Question"
                data-item="i"
                data-key="34556"
              >
                <h3
                  class="nlf-middle-between h_gap-sm el-tab rel"
                  itemprop="name"
                  role="tab"
                  tabindex="0"
                  aria-selected="false"
                  aria-expanded="false"
                  aria-controls="FAQs_V1WhatAretheDamagesforPersonalInjuryinTexas"
                  index="1"
                >
                  What Are the Damages for Personal Injury in Texas?
                  <svg
                    viewBox="0 0 16 16"
                    class="fit"
                    role="presentation"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#down"
                  >
                    <path d="M15.7 3.798C15.892 3.99 16 4.251 16 4.523C16 4.795 15.892 5.056 15.7 5.249L8.734 12.219C8.542 12.411 8.281 12.52 8.009 12.52C7.737 12.52 7.476 12.411 7.284 12.219L0.319 5.249C0.118 5.058 0.003 4.794 0 4.518C-0.003 4.241 0.105 3.975 0.301 3.78C0.497 3.584 0.763 3.476 1.039 3.48C1.316 3.484 1.579 3.599 1.77 3.8L8.009 10.045L14.249 3.8C14.441 3.607 14.701 3.498 14.974 3.498C15.246 3.497 15.507 3.605 15.7 3.798L15.7 3.798Z"></path>
                  </svg>
                </h3>
                <div
                  class="content el-panel"
                  itemscope=""
                  itemprop="acceptedAnswer"
                  itemtype="https://schema.org/Answer"
                  role="tabpanel"
                  aria-hidden="true"
                  id="FAQs_V1WhatAretheDamagesforPersonalInjuryinTexas"
                >
                  <div itemprop="text">
                    <p>
                      In Texas, if you've been injured, you may be entitled to
                      various types of compensation, categorized into economic,
                      non-economic, and exemplary damages.
                      <b>Economic damages</b> cover financial losses such as
                      medical expenses, lost wages, and property damage.
                      <b>Non-economic damages</b> cover intangible losses such
                      as pain and suffering, emotional distress, and the impact
                      on your quality of life. <b>Exemplary damages</b> are
                      aimed at punishing the offender for reckless actions and
                      deterring similar behavior in the future. There are limits
                      on how much you can claim in certain cases, especially
                      against medical professionals or government entities.
                      Because of these complexities, it is important that you
                      consult with a knowledgeable Texas injury attorney to
                      ensure you receive the full, fair compensation you
                      deserve.
                    </p>
                  </div>
                </div>
              </li>
              <li
                itemscope=""
                itemprop="mainEntity"
                itemtype="https://schema.org/Question"
                data-item="i"
                data-key="34557"
              >
                <h3
                  class="nlf-middle-between h_gap-sm el-tab rel"
                  itemprop="name"
                  role="tab"
                  tabindex="0"
                  aria-selected="false"
                  aria-expanded="false"
                  aria-controls="FAQs_V1WhatDoesLitigationMeaninaPersonalInjuryLawsuit"
                  index="2"
                >
                  What Does Litigation Mean in a Personal Injury Lawsuit?
                  <svg
                    viewBox="0 0 16 16"
                    class="fit"
                    role="presentation"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#down"
                  >
                    <path d="M15.7 3.798C15.892 3.99 16 4.251 16 4.523C16 4.795 15.892 5.056 15.7 5.249L8.734 12.219C8.542 12.411 8.281 12.52 8.009 12.52C7.737 12.52 7.476 12.411 7.284 12.219L0.319 5.249C0.118 5.058 0.003 4.794 0 4.518C-0.003 4.241 0.105 3.975 0.301 3.78C0.497 3.584 0.763 3.476 1.039 3.48C1.316 3.484 1.579 3.599 1.77 3.8L8.009 10.045L14.249 3.8C14.441 3.607 14.701 3.498 14.974 3.498C15.246 3.497 15.507 3.605 15.7 3.798L15.7 3.798Z"></path>
                  </svg>
                </h3>
                <div
                  class="content el-panel"
                  itemscope=""
                  itemprop="acceptedAnswer"
                  itemtype="https://schema.org/Answer"
                  role="tabpanel"
                  aria-hidden="true"
                  id="FAQs_V1WhatDoesLitigationMeaninaPersonalInjuryLawsuit"
                >
                  <div itemprop="text">
                    When referring to personal injury lawsuits, “litigation”
                    refers to the legal steps that are taken to seek full, fair
                    compensation for the harm that was caused by someone else’s
                    negligence or deliberation actions. This starts when the
                    individual, also referred to as a plaintiff, files a lawsuit
                    against a defendant. The defendant may be the individual or
                    entity responsible for the injuries. The defendant then has
                    a chance to respond to these allegations. Following this,
                    both parties engage in what is known as the
                    <a href="https://www.arnolditkin.com/blog/injury/what-is-discovery-in-law-/">
                      discovery process
                    </a>
                    to exchange information and then prepare for trial. During
                    this process, both parties can engage in settlement
                    negotiations to try and reach an agreement; however, if that
                    does not work, the case will proceed to trial where the
                    outcome will be determined by a judge or jury.
                  </div>
                </div>
              </li>
              <li
                itemscope=""
                itemprop="mainEntity"
                itemtype="https://schema.org/Question"
                data-item="i"
                data-key="18559"
              >
                <h3
                  class="nlf-middle-between h_gap-sm el-tab rel"
                  itemprop="name"
                  role="tab"
                  tabindex="0"
                  aria-selected="false"
                  aria-expanded="false"
                  aria-controls="FAQs_V1What’saHoustonPersonalInjuryAttorney"
                  index="3"
                >
                  What’s a Houston Personal Injury Attorney?
                  <svg
                    viewBox="0 0 16 16"
                    class="fit"
                    role="presentation"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#down"
                  >
                    <path d="M15.7 3.798C15.892 3.99 16 4.251 16 4.523C16 4.795 15.892 5.056 15.7 5.249L8.734 12.219C8.542 12.411 8.281 12.52 8.009 12.52C7.737 12.52 7.476 12.411 7.284 12.219L0.319 5.249C0.118 5.058 0.003 4.794 0 4.518C-0.003 4.241 0.105 3.975 0.301 3.78C0.497 3.584 0.763 3.476 1.039 3.48C1.316 3.484 1.579 3.599 1.77 3.8L8.009 10.045L14.249 3.8C14.441 3.607 14.701 3.498 14.974 3.498C15.246 3.497 15.507 3.605 15.7 3.798L15.7 3.798Z"></path>
                  </svg>
                </h3>
                <div
                  class="content el-panel"
                  itemscope=""
                  itemprop="acceptedAnswer"
                  itemtype="https://schema.org/Answer"
                  role="tabpanel"
                  aria-hidden="true"
                  id="FAQs_V1What’saHoustonPersonalInjuryAttorney"
                >
                  <div itemprop="text">
                    Houston personal injury attorneys represent people who have
                    been hurt by other people’s negligence. With a personal
                    injury lawyer, people who’ve been injured or lost a loved
                    one are much more likely to recover from their losses, which
                    include medical costs, lost wages, and more. If you’ve been
                    hurt, you absolutely owe it to yourself to call a personal
                    injury attorney in Texas to hear your legal options and
                    advise you on your next steps. Arnold &amp; Itkin is
                    currently recognized as one of the best personal injury
                    firms in the country. If you are considering hiring a
                    lawyer, you should call us. Your consultation is free.
                  </div>
                </div>
              </li>
              <li
                itemscope=""
                itemprop="mainEntity"
                itemtype="https://schema.org/Question"
                data-item="i"
                data-key="18560"
              >
                <h3
                  class="nlf-middle-between h_gap-sm el-tab rel"
                  itemprop="name"
                  role="tab"
                  tabindex="0"
                  aria-selected="false"
                  aria-expanded="false"
                  aria-controls="FAQs_V1WhatKindofCasesDoYourHoustonInjuryAttorneysHandle"
                  index="4"
                >
                  What Kind of Cases Do Your Houston Injury Attorneys Handle?
                  <svg
                    viewBox="0 0 16 16"
                    class="fit"
                    role="presentation"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#down"
                  >
                    <path d="M15.7 3.798C15.892 3.99 16 4.251 16 4.523C16 4.795 15.892 5.056 15.7 5.249L8.734 12.219C8.542 12.411 8.281 12.52 8.009 12.52C7.737 12.52 7.476 12.411 7.284 12.219L0.319 5.249C0.118 5.058 0.003 4.794 0 4.518C-0.003 4.241 0.105 3.975 0.301 3.78C0.497 3.584 0.763 3.476 1.039 3.48C1.316 3.484 1.579 3.599 1.77 3.8L8.009 10.045L14.249 3.8C14.441 3.607 14.701 3.498 14.974 3.498C15.246 3.497 15.507 3.605 15.7 3.798L15.7 3.798Z"></path>
                  </svg>
                </h3>
                <div
                  class="content el-panel"
                  itemscope=""
                  itemprop="acceptedAnswer"
                  itemtype="https://schema.org/Answer"
                  role="tabpanel"
                  aria-hidden="true"
                  id="FAQs_V1WhatKindofCasesDoYourHoustonInjuryAttorneysHandle"
                >
                  <div itemprop="text">
                    At Arnold &amp; Itkin, our Houston personal injury attorneys
                    handle cases where someone is injured due to another party’s
                    negligence, poor judgment, or recklessness. That includes
                    virtually any accident, including
                    <a href="https://www.arnolditkin.com/houston-car-accident-attorneys/">
                      car accidents
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/oilfield-accidents/">
                      oilfield accidents
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/houston-truck-accident-lawyer/">
                      truck accidents
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/plant-refinery-accidents/plant-refinery-explosions/">
                      plant explosions
                    </a>
                    , and
                    <a href="https://www.arnolditkin.com/offshore-injuries/oil-rig-accidents/">
                      oil rig accidents
                    </a>
                    . Different injury attorneys in Houston focus on a
                    particular type of case, but we have won every type of case
                    involving
                    <a href="https://www.arnolditkin.com/catastrophic-injuries/">
                      catastrophic injury
                    </a>
                    and
                    <a href="https://www.arnolditkin.com/houston-wrongful-death-lawyers/">
                      wrongful death
                    </a>
                    .
                  </div>
                </div>
              </li>
              <li
                itemscope=""
                itemprop="mainEntity"
                itemtype="https://schema.org/Question"
                data-item="i"
                data-key="18561"
              >
                <h3
                  class="nlf-middle-between h_gap-sm el-tab rel"
                  itemprop="name"
                  role="tab"
                  tabindex="0"
                  aria-selected="false"
                  aria-expanded="false"
                  aria-controls="FAQs_V1WhatIfICan’tAffordaHoustonPersonalInjuryLawyer"
                  index="5"
                >
                  What If I Can’t Afford a Houston Personal Injury Lawyer?
                  <svg
                    viewBox="0 0 16 16"
                    class="fit"
                    role="presentation"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#down"
                  >
                    <path d="M15.7 3.798C15.892 3.99 16 4.251 16 4.523C16 4.795 15.892 5.056 15.7 5.249L8.734 12.219C8.542 12.411 8.281 12.52 8.009 12.52C7.737 12.52 7.476 12.411 7.284 12.219L0.319 5.249C0.118 5.058 0.003 4.794 0 4.518C-0.003 4.241 0.105 3.975 0.301 3.78C0.497 3.584 0.763 3.476 1.039 3.48C1.316 3.484 1.579 3.599 1.77 3.8L8.009 10.045L14.249 3.8C14.441 3.607 14.701 3.498 14.974 3.498C15.246 3.497 15.507 3.605 15.7 3.798L15.7 3.798Z"></path>
                  </svg>
                </h3>
                <div
                  class="content el-panel"
                  itemscope=""
                  itemprop="acceptedAnswer"
                  itemtype="https://schema.org/Answer"
                  role="tabpanel"
                  aria-hidden="true"
                  id="FAQs_V1WhatIfICan’tAffordaHoustonPersonalInjuryLawyer"
                >
                  <div itemprop="text">
                    Our Houston injury law firm takes cases on a contingency fee
                    basis, which essentially means our clients only pay us if we
                    win their case. There’s no upfront payment, bills, or
                    invoices. We cover everything so our clients can focus on
                    getting better.
                  </div>
                </div>
              </li>
              <li
                itemscope=""
                itemprop="mainEntity"
                itemtype="https://schema.org/Question"
                data-item="i"
                data-key="18562"
              >
                <h3
                  class="nlf-middle-between h_gap-sm el-tab rel"
                  itemprop="name"
                  role="tab"
                  tabindex="0"
                  aria-selected="false"
                  aria-expanded="false"
                  aria-controls="FAQs_V1HowMuchIsMyHoustonPersonalInjuryCaseWorth"
                  index="6"
                >
                  How Much Is My Houston Personal Injury Case Worth?
                  <svg
                    viewBox="0 0 16 16"
                    class="fit"
                    role="presentation"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#down"
                  >
                    <path d="M15.7 3.798C15.892 3.99 16 4.251 16 4.523C16 4.795 15.892 5.056 15.7 5.249L8.734 12.219C8.542 12.411 8.281 12.52 8.009 12.52C7.737 12.52 7.476 12.411 7.284 12.219L0.319 5.249C0.118 5.058 0.003 4.794 0 4.518C-0.003 4.241 0.105 3.975 0.301 3.78C0.497 3.584 0.763 3.476 1.039 3.48C1.316 3.484 1.579 3.599 1.77 3.8L8.009 10.045L14.249 3.8C14.441 3.607 14.701 3.498 14.974 3.498C15.246 3.497 15.507 3.605 15.7 3.798L15.7 3.798Z"></path>
                  </svg>
                </h3>
                <div
                  class="content el-panel"
                  itemscope=""
                  itemprop="acceptedAnswer"
                  itemtype="https://schema.org/Answer"
                  role="tabpanel"
                  aria-hidden="true"
                  id="FAQs_V1HowMuchIsMyHoustonPersonalInjuryCaseWorth"
                >
                  <div itemprop="text">
                    Your case’s worth depends on the losses you’ve suffered as a
                    result of your injuries, as well as the severity of the
                    injuries. The total value of your medical bills, lost wages,
                    lost future income, and future treatment costs will make up
                    at least some of your case’s worth. People with
                    life-altering injuries can also add the cost of their loss
                    in quality of life, like physical pain, mental anguish,
                    emotional distress, or loss of consortium. The easiest way
                    to determine the value of your personal injury claim is by
                    speaking with our team during a free consultation.
                  </div>
                </div>
              </li>
              <li
                itemscope=""
                itemprop="mainEntity"
                itemtype="https://schema.org/Question"
                data-item="i"
                data-key="18563"
              >
                <h3
                  class="nlf-middle-between h_gap-sm el-tab rel"
                  itemprop="name"
                  role="tab"
                  tabindex="0"
                  aria-selected="false"
                  aria-expanded="false"
                  aria-controls="FAQs_V1WhyHireaHoustonPersonalInjuryLawyerWhoTriesCases"
                  index="7"
                >
                  Why Hire a Houston Personal Injury Lawyer Who Tries Cases?
                  <svg
                    viewBox="0 0 16 16"
                    class="fit"
                    role="presentation"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#down"
                  >
                    <path d="M15.7 3.798C15.892 3.99 16 4.251 16 4.523C16 4.795 15.892 5.056 15.7 5.249L8.734 12.219C8.542 12.411 8.281 12.52 8.009 12.52C7.737 12.52 7.476 12.411 7.284 12.219L0.319 5.249C0.118 5.058 0.003 4.794 0 4.518C-0.003 4.241 0.105 3.975 0.301 3.78C0.497 3.584 0.763 3.476 1.039 3.48C1.316 3.484 1.579 3.599 1.77 3.8L8.009 10.045L14.249 3.8C14.441 3.607 14.701 3.498 14.974 3.498C15.246 3.497 15.507 3.605 15.7 3.798L15.7 3.798Z"></path>
                  </svg>
                </h3>
                <div
                  class="content el-panel"
                  itemscope=""
                  itemprop="acceptedAnswer"
                  itemtype="https://schema.org/Answer"
                  role="tabpanel"
                  aria-hidden="true"
                  id="FAQs_V1WhyHireaHoustonPersonalInjuryLawyerWhoTriesCases"
                >
                  <div itemprop="text">
                    Having a Houston personal injury attorney who tries cases
                    offers plaintiffs more advantages during settlement
                    negotiations. Most lawyers don’t spend much time in
                    courtrooms, so defendants often have little to fear if they
                    end up going to court. This discourages settlements or makes
                    payouts smaller as a result. However, when a lawyer has a
                    history of trial victories, it incentivizes opponents to
                    settle faster and for larger amounts. Our firm has won many
                    of the largest jury verdicts in the history of the United
                    States. These verdicts have allowed us to achieve
                    record-breaking settlements for our clients.
                  </div>
                </div>
              </li>
              <li
                itemscope=""
                itemprop="mainEntity"
                itemtype="https://schema.org/Question"
                data-item="i"
                data-key="34558"
              >
                <h3
                  class="nlf-middle-between h_gap-sm el-tab rel"
                  itemprop="name"
                  role="tab"
                  tabindex="0"
                  aria-selected="false"
                  aria-expanded="false"
                  aria-controls="FAQs_V1WhatAreasDoYouServe"
                  index="8"
                >
                  What Areas Do You Serve?
                  <svg
                    viewBox="0 0 16 16"
                    class="fit"
                    role="presentation"
                    data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#down"
                  >
                    <path d="M15.7 3.798C15.892 3.99 16 4.251 16 4.523C16 4.795 15.892 5.056 15.7 5.249L8.734 12.219C8.542 12.411 8.281 12.52 8.009 12.52C7.737 12.52 7.476 12.411 7.284 12.219L0.319 5.249C0.118 5.058 0.003 4.794 0 4.518C-0.003 4.241 0.105 3.975 0.301 3.78C0.497 3.584 0.763 3.476 1.039 3.48C1.316 3.484 1.579 3.599 1.77 3.8L8.009 10.045L14.249 3.8C14.441 3.607 14.701 3.498 14.974 3.498C15.246 3.497 15.507 3.605 15.7 3.798L15.7 3.798Z"></path>
                  </svg>
                </h3>
                <div
                  class="content el-panel"
                  itemscope=""
                  itemprop="acceptedAnswer"
                  itemtype="https://schema.org/Answer"
                  role="tabpanel"
                  aria-hidden="true"
                  id="FAQs_V1WhatAreasDoYouServe"
                >
                  <div itemprop="text">
                    With convenient office locations in Houston,
                    <a href="https://www.arnolditkin.com/dallas-personal-injury/">
                      Dallas
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/midland-personal-injury/">
                      Midland
                    </a>
                    , and
                    <a href="https://www.arnolditkin.com/louisiana/">
                      Baton Rouge
                    </a>
                    , Arnold &amp; Itkin is equipped to take on cases from coast
                    to coast, including throughout Texas, Louisiana,
                    <a href="https://www.arnolditkin.com/alabama-personal-injury/">
                      Alabama
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/mississippi-personal-injury/">
                      Mississippi
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/new-mexico/">
                      New Mexico
                    </a>
                    , and beyond. That includes helping people in Albuquerque,
                    <a href="https://www.arnolditkin.com/austin-personal-injury/">
                      Austin
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/baytown-personal-injury/">
                      Baytown
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/beaumont-personal-injury/">
                      Beaumont
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/corpus-christi-personal-injury/">
                      Corpus Christi
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/el-paso-personal-injury/">
                      El Paso
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/fort-worth-personal-injury/">
                      Fort Worth
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/galveston-personal-injury/">
                      Galveston
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/lafayette-personal-injury/">
                      Lafayette
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/lake-charles-personal-injury/">
                      Lake Charles
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/laredo-personal-injury/">
                      Laredo
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/lubbock-personal-injury/">
                      Lubbock
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/mcallen-personal-injury/">
                      McAllen
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/pasadena-tx-personal-injury/">
                      Pasadena
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/port-arthur-personal-injury/">
                      Port Arthur
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/san-angelo-personal-injury/">
                      San Angelo
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/san-antonio-personal-injury/">
                      San Antonio
                    </a>
                    ,
                    <a href="https://www.arnolditkin.com/tyler-tx-personal-injury/">
                      Tyler
                    </a>
                    , and all of West Texas. Regardless of where you have been
                    hurt, if you or someone you love has been injured due to
                    someone else’s negligence, you can trust our trial lawyers
                    to be there to help you fight for the compensation you
                    deserve.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <NMWCLIP />
        <form
          id="Form_ContactForm"
          method="post"
          enctype="multipart/form-data"
          action="https://www.arnolditkin.com/"
        >
          <input type="hidden" name="_m_" value="ContactForm" />
          <section
            id="ContactForm"
            class="contact-form text-center dark-bg ui-repeater ui-contact-form ui-comms-api"
            universal_="true"
            data-redirect="/thank-you/"
          >
            <a name="Contact" class="anchor" data-item="i" data-key=""></a>
            <picture class="bg hide-550" data-role="picture">
              <img
                class="full"
                src="./assets_src/contact-bg.2305162206254.jpg"
                alt=""
                role="presentation"
              />
            </picture>
            <div class="main" data-item="i" data-key="">
              <header>
                <span class="blk">Contact Us</span>
                <h2>Get Started with a Free Consultation</h2>
              </header>
              <div class="nlf-top-reverse gap-sm block-550">
                <fieldset class="auto">
                  <ul class="nlf-top-wrap gap-sm block-550">
                    <li class="half">
                      <div class="input-text">
                        <input
                          required="required"
                          type="text"
                          id="ContactForm_ITM0_FirstName"
                          class="ui-cms-input"
                          name="ContactForm$ITM0$FirstName"
                          value=""
                        />
                        <label for="ContactForm_ITM0_FirstName">
                          First Name
                        </label>
                        <div
                          class="validation"
                          for="ContactForm_ITM0_FirstName"
                          data-type="valueMissing"
                        >
                          Please enter your first name.
                        </div>
                      </div>
                    </li>
                    <li class="half">
                      <div class="input-text">
                        <input
                          required="required"
                          type="text"
                          id="ContactForm_ITM0_LastName"
                          class="ui-cms-input"
                          name="ContactForm$ITM0$LastName"
                          value=""
                        />
                        <label for="ContactForm_ITM0_LastName">Last Name</label>
                        <div
                          class="validation"
                          for="ContactForm_ITM0_LastName"
                          data-type="valueMissing"
                        >
                          Please enter your last name.
                        </div>
                      </div>
                    </li>
                    <li class="half">
                      <div class="input-text">
                        <input
                          required="required"
                          type="email"
                          id="ContactForm_ITM0_EmailAddress"
                          class="ui-cms-input"
                          name="ContactForm$ITM0$EmailAddress"
                          value=""
                        />
                        <label for="ContactForm_ITM0_EmailAddress">Email</label>
                        <div
                          class="validation"
                          for="ContactForm_ITM0_EmailAddress"
                          data-type="typeMismatch"
                        >
                          This isn't a valid email address.
                        </div>
                        <div
                          class="validation"
                          for="ContactForm_ITM0_EmailAddress"
                          data-type="valueMissing"
                        >
                          Please enter your email address.
                        </div>
                      </div>
                    </li>
                    <li class="half">
                      <div class="input-text">
                        <input
                          id="ContactForm_ITM0_Phone"
                          type="tel"
                          pattern="[(]\d{3}[)][\s]\d{3}[\-]\d{4}"
                          class="phone-mask ui-cms-input"
                          required="required"
                          name="ContactForm$ITM0$Phone"
                          value=""
                        />
                        <label for="ContactForm_ITM0_Phone">Phone</label>
                        <div
                          class="validation"
                          for="ContactForm_ITM0_Phone"
                          data-type="typeMismatch"
                        >
                          This isn't a valid phone number.
                        </div>
                        <div
                          class="validation"
                          for="ContactForm_ITM0_Phone"
                          data-type="valueMissing"
                        >
                          Please enter your phone number.
                        </div>
                      </div>
                    </li>
                    <li class="half">
                      <div class="input-text">
                        <svg
                          viewBox="0 0 16 16"
                          role="presentation"
                          data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#down"
                        >
                          <path d="M15.7 3.798C15.892 3.99 16 4.251 16 4.523C16 4.795 15.892 5.056 15.7 5.249L8.734 12.219C8.542 12.411 8.281 12.52 8.009 12.52C7.737 12.52 7.476 12.411 7.284 12.219L0.319 5.249C0.118 5.058 0.003 4.794 0 4.518C-0.003 4.241 0.105 3.975 0.301 3.78C0.497 3.584 0.763 3.476 1.039 3.48C1.316 3.484 1.579 3.599 1.77 3.8L8.009 10.045L14.249 3.8C14.441 3.607 14.701 3.498 14.974 3.498C15.246 3.497 15.507 3.605 15.7 3.798L15.7 3.798Z"></path>
                        </svg>
                        <select
                          id="ContactForm_ITM0_LeadTypeID"
                          required="required"
                          class="ui-cms-select ui-cms-input"
                          name="ContactForm$ITM0$LeadTypeID"
                        >
                          <option class=""></option>
                          <option value="1">
                            Yes, I am a potential new client.
                          </option>
                          <option value="11">
                            No, I am a current, existing client.
                          </option>
                          <option value="13">I'm neither.</option>
                        </select>
                        <label for="ContactForm_ITM0_LeadTypeID">
                          Are you a new client?
                        </label>
                        <div
                          class="validation"
                          for="ContactForm_ITM0_LeadTypeID"
                          data-type="valueMissing"
                        >
                          Please make a selection.
                        </div>
                      </div>
                    </li>
                    <li class="half">
                      <div class="input-text">
                        <svg
                          viewBox="0 0 16 16"
                          role="presentation"
                          data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#down"
                        >
                          <path d="M15.7 3.798C15.892 3.99 16 4.251 16 4.523C16 4.795 15.892 5.056 15.7 5.249L8.734 12.219C8.542 12.411 8.281 12.52 8.009 12.52C7.737 12.52 7.476 12.411 7.284 12.219L0.319 5.249C0.118 5.058 0.003 4.794 0 4.518C-0.003 4.241 0.105 3.975 0.301 3.78C0.497 3.584 0.763 3.476 1.039 3.48C1.316 3.484 1.579 3.599 1.77 3.8L8.009 10.045L14.249 3.8C14.441 3.607 14.701 3.498 14.974 3.498C15.246 3.497 15.507 3.605 15.7 3.798L15.7 3.798Z"></path>
                        </svg>
                        <select
                          id="ContactForm_ITM0_Case_Type"
                          required="required"
                          class="ui-cms-select ui-cms-input"
                          name="ContactForm$ITM0$Case_Type"
                        >
                          <option class=""></option>
                          <option value="5">Business Dispute</option>
                          <option value="6">Commercial / Truck Accident</option>
                          <option value="7">Cruise Line Injury</option>
                          <option value="13">Maritime Accident</option>
                          <option value="16">Motor Vehicle Accident</option>
                          <option value="14">Medical Malpractice</option>
                          <option value="15">Other</option>
                          <option value="46">Personal Injury</option>
                          <option value="24">Round Up</option>
                          <option value="25">Talcum Powder</option>
                        </select>
                        <label for="ContactForm_ITM0_Case_Type">
                          Case Type
                        </label>
                        <div
                          class="validation"
                          for="ContactForm_ITM0_Case_Type"
                          data-type="valueMissing"
                        >
                          Please make a selection.
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="input-text">
                        <textarea
                          type="text"
                          id="ContactForm_ITM0_Message"
                          required="required"
                          class="ui-cms-input"
                          name="ContactForm$ITM0$Message"
                        ></textarea>
                        <label for="ContactForm_ITM0_Message">
                          Tell Us What Happened
                        </label>
                        <div
                          class="validation"
                          for="ContactForm_ITM0_Message"
                          data-type="valueMissing"
                        >
                          Please enter a message.
                        </div>
                      </div>
                    </li>
                  </ul>
                  <input
                    id="ContactForm_ITM0_Form5"
                    value="false"
                    type="hidden"
                    class="ui-cms-input"
                    name="ContactForm$ITM0$Form5"
                  />
                  <input
                    id="ContactForm_ITM0_FFD6"
                    type="hidden"
                    class="ui-cms-input"
                    name="ContactForm$ITM0$FFD6"
                    value="1722677154039"
                  />
                  <button
                    class="btn"
                    type="submit"
                    id="ContactForm_ITM0_ctl11"
                    name="ContactForm$ITM0$ctl11"
                    data-commandname="Update"
                  >
                    Send
                  </button>
                </fieldset>
              </div>
            </div>
          </section>
        </form>
      </main>
      <footer id="FooterZone">
        <section id="Footer" class="footer dark-bg" universal_="true">
          <Helmet>
            <script type="application/ld+json">
              {JSON.stringify(structuredData)}
            </script>
          </Helmet>

          <div class="nlf-middle h-gap top-foot text-center">
            <a href="https://www.arnolditkin.com/" class="foot-logo third">
              <img
                src="./assets_src/footer-logo.2303131351207.png"
                alt="Arnold &amp; Itkin"
                title="Arnold &amp; Itkin"
              />
            </a>
            <div class="contact-info third nlf">
              <div>
                <strong class="blk">100% Free Consultation</strong>
                <a href="tel:(888) 493-1629" id="Footer_1">
                  (888) 493-1629
                </a>
              </div>
            </div>
            <ul class="social nlf-wrap-end third ui-repeater" id="ctl00">
              <li data-item="i" data-key="82402">
                <a
                  href="https://www.facebook.com/arnolditkin"
                  title="Facebook"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    viewBox="0 0 36 36"
                    data-use="/cms/svg/admin/b02chict1vf.36.2407091106493.svg#facebook"
                  >
                    <path d="M20.762 0C14.563 0 13.152 4.601 13.152 7.544L13.152 11.658L9.562 11.658L9.562 18.016L13.144 18.016C13.144 26.175 13.144 36 13.144 36L20.684 36C20.684 36 20.684 26.076 20.684 18.016L25.77 18.016L26.438 11.658L20.692 11.658L20.692 7.924C20.692 6.517 21.628 6.191 22.287 6.191L26.345 6.191L26.345 0.024L20.762 0Z"></path>
                  </svg>
                </a>
              </li>
              <li data-item="i" data-key="82404">
                <a
                  href="https://x.com/arnolditkin"
                  title="Twitter"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    viewBox="0 0 36 36"
                    data-use="/cms/svg/admin/b02chict1vf.36.2407091106493.svg#twitter"
                  >
                    <path d="M26.319 24.312c-0.981-1.431-1.969-2.862-2.95-4.294c-0.988-1.438-1.981-2.881-2.969-4.319c-0.075-0.112-0.162-0.219-0.25-0.338c0.25-0.294 0.488-0.594 0.738-0.881c0.812-0.944 1.625-1.881 2.438-2.825c0.431-0.5 0.862-0.994 1.294-1.488c1.062-1.238 2.125-2.475 3.188-3.719c0.856-1 1.712-2 2.569-3c0-0.006 0.006-0.006 0.006-0.012h-2.362c-0.2 0.231-0.394 0.456-0.594 0.688c-1.031 1.194-2.062 2.388-3.094 3.581c-0.731 0.844-1.456 1.694-2.188 2.544c-0.512 0.594-1.019 1.188-1.531 1.788c-0.469 0.544-0.931 1.094-1.394 1.638c-0.031 0.038-0.044 0.088-0.075 0.162c-0.119-0.15-0.194-0.238-0.256-0.331c-0.181-0.256-0.356-0.512-0.531-0.775c-1.075-1.562-2.144-3.125-3.219-4.688c-1.05-1.531-2.106-3.062-3.15-4.594c0-0.006-0.006-0.006-0.006-0.012h-8.312c0.425 0.612 0.85 1.219 1.275 1.838c0.769 1.119 1.531 2.244 2.3 3.362c0.912 1.325 1.825 2.644 2.731 3.962c1.025 1.494 2.05 2.994 3.075 4.488c0.444 0.644 0.881 1.294 1.325 1.938c0.081 0.119 0.062 0.206-0.025 0.306c-0.169 0.181-0.338 0.362-0.494 0.55c-0.662 0.769-1.312 1.544-1.975 2.312c-0.956 1.112-1.919 2.225-2.881 3.338c-0.706 0.819-1.406 1.638-2.106 2.456c-1.094 1.269-2.181 2.544-3.275 3.812h2.35c0.881-1.025 1.769-2.05 2.65-3.075c0.912-1.05 1.825-2.106 2.731-3.156c0.75-0.869 1.494-1.738 2.238-2.606c0.438-0.512 0.881-1.019 1.325-1.525c0.169-0.194 0.331-0.394 0.506-0.581c0.112-0.119 0.162-0.1 0.256 0.031c0.575 0.844 1.15 1.681 1.725 2.519c1.1 1.606 2.194 3.212 3.294 4.812c0.731 1.062 1.462 2.119 2.194 3.175c0.094 0.138 0.188 0.269 0.288 0.406H31.438c-0.781-1.144-1.55-2.288-2.331-3.425C28.175 27.019 27.244 25.669 26.319 24.312zM28.156 30.188c-0.062 0-0.125 0-0.188 0c-1.131 0-2.256-0.006-3.388 0c-0.162 0-0.256-0.025-0.356-0.188c-0.306-0.488-0.65-0.944-0.981-1.419c-0.581-0.838-1.162-1.675-1.75-2.506c-0.788-1.125-1.575-2.244-2.362-3.362c-0.819-1.169-1.631-2.331-2.45-3.5c-0.656-0.944-1.306-1.894-1.969-2.838c-0.95-1.362-1.912-2.719-2.862-4.075c-0.575-0.819-1.144-1.644-1.719-2.469c-0.938-1.338-1.869-2.675-2.806-4.012c-0.138-0.2-0.275-0.394-0.412-0.594c-0.031-0.044-0.056-0.1-0.1-0.188c0.144 0 0.238 0 0.338 0c1.138 0 2.281-0.006 3.419-0.012c0.1 0 0.138 0.031 0.188 0.112c0.3 0.438 0.606 0.869 0.912 1.306c0.569 0.819 1.144 1.638 1.712 2.45c0.781 1.112 1.562 2.225 2.338 3.338c0.706 1.012 1.406 2.025 2.112 3.038c0.919 1.319 1.844 2.631 2.762 3.944c0.881 1.256 1.75 2.519 2.631 3.775c1.025 1.462 2.05 2.925 3.075 4.388c0.562 0.8 1.125 1.606 1.688 2.412c0.075 0.112 0.138 0.238 0.206 0.356C28.181 30.156 28.169 30.169 28.156 30.188z"></path>
                  </svg>
                </a>
              </li>
              <li data-item="i" data-key="82405">
                <a
                  href="https://www.youtube.com/channel/UCw4C9y1XFLLWDYiq52JTHfg"
                  title="YouTube"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    viewBox="0 0 36 36"
                    data-use="/cms/svg/admin/b02chict1vf.36.2407091106493.svg#youtube"
                  >
                    <path d="M32.624 30.374q-7.805 1.125-14.625 1.125-3.023 0-6.68-0.281t-5.801-0.562l-2.145-0.281q-0.949-0.176-1.67-1.318t-1.055-2.76-0.492-3.023-0.158-2.566v-5.414q0-8.965 3.375-9.668 7.805-1.125 14.625-1.125 3.023 0 6.68 0.281t5.801 0.562l2.145 0.281q1.02 0.141 1.74 1.283t1.037 2.795 0.457 3.023 0.141 2.566v5.414q0 1.266-0.105 2.566t-0.422 2.988-1.055 2.812-1.793 1.301zM24.362 17.121l-9.211-5.625q-0.387-0.352-1.02-0.193t-0.633 0.51v12.375q0 0.387 0.633 0.527t1.02-0.211l9.211-5.625q0.387-0.352 0.387-0.879t-0.387-0.879z"></path>
                  </svg>
                </a>
              </li>
              <li data-item="i" data-key="82406">
                <a
                  href="https://www.instagram.com/arnolditkinlaw/"
                  title="Instagram"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    viewBox="0 0 36 36"
                    data-use="/cms/svg/admin/b02chict1vf.36.2407091106493.svg#instagram"
                  >
                    <path d="M25.283 35.997L10.737 35.997C4.816 35.989 0.018 31.191 0.01 25.271L0.01 10.723C0.018 4.802 4.816 0.006 10.737-0.002L25.283-0.002C31.204 0.006 36.001 4.802 36.01 10.723L36.01 25.271C36.001 31.191 31.204 35.989 25.283 35.997ZM32.385 10.723C32.388 6.802 29.213 3.62 25.291 3.615C25.289 3.615 25.287 3.615 25.283 3.615L10.737 3.615C6.815 3.615 3.636 6.794 3.636 10.715L3.636 25.271C3.636 29.192 6.815 32.371 10.737 32.371L25.283 32.371C29.205 32.371 32.385 29.192 32.385 25.271L32.385 10.723ZM27.342 10.987C26.093 10.987 25.08 9.975 25.08 8.726C25.08 7.477 26.093 6.464 27.342 6.464C28.59 6.464 29.603 7.477 29.603 8.726C29.603 9.975 28.59 10.987 27.342 10.987ZM18.01 27.305C12.869 27.305 8.701 23.138 8.701 17.997C8.701 12.856 12.869 8.688 18.01 8.688C23.151 8.688 27.319 12.856 27.319 17.997C27.311 23.135 23.148 27.298 18.01 27.305ZM18.01 12.306C14.867 12.306 12.319 14.854 12.319 17.997C12.319 21.14 14.867 23.688 18.01 23.688C21.153 23.688 23.701 21.14 23.701 17.997C23.701 14.854 21.153 12.306 18.01 12.306Z"></path>
                  </svg>
                </a>
              </li>
              <li data-item="i" data-key="82407">
                <a
                  href="https://www.linkedin.com/company/arnold-itkin-llp/"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    viewBox="0 0 36 36"
                    data-use="/cms/svg/admin/b02chict1vf.36.2407091106493.svg#linkedin"
                  >
                    <path d="M4.286 1.688C1.695 1.688 0 3.347 0 5.536C0 7.684 1.647 9.378 4.187 9.378L4.238 9.378C6.875 9.378 8.517 7.677 8.517 5.529C8.467 3.342 6.875 1.688 4.286 1.688ZM27.096 11.936C23.076 11.936 20.557 14.106 20.091 15.627L20.091 12.149L12.208 12.149C12.311 13.996 12.208 34.312 12.208 34.312L20.091 34.312L20.091 22.319C20.091 21.653 20.06 20.986 20.262 20.508C20.805 19.176 21.969 17.792 24.063 17.792C26.799 17.792 28.044 19.842 28.044 22.843L28.044 34.312L36 34.312L36 21.989C36 15.125 32.082 11.936 27.096 11.936ZM0.908 12.15L0.908 34.312L7.924 34.312L7.924 12.15L0.908 12.15Z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <nav>
            <ul class="nlf-middle-center block-550">
              <li>
                <a href="https://www.arnolditkin.com/">Home</a>
              </li>
              <li>
                <a href="https://www.arnolditkin.com/meet-our-attorneys/">
                  Meet Our Attorneys
                </a>
              </li>
              <li>
                <a href="https://www.arnolditkin.com/practice-areas/">
                  Practice Areas
                </a>
              </li>
              <li>
                <a href="https://www.arnolditkin.com/our-victories/">
                  Our Victories
                </a>
              </li>
              <li>
                <a href="https://www.arnolditkin.com/contact-us/">Contact Us</a>
              </li>
            </ul>
          </nav>
          <div class="locations ui-repeater" id="ctl02">
            <strong class="blk text-center">Office Locations</strong>
            <ul class="nlf-top gap-sm block-550">
              <li
                class="half auto nlf-top block-550"
                data-item="i"
                data-key="3795"
              >
                <picture class="rel fit">
                  <source
                    media="(max-width: 550px)"
                    srcset="
                    https://d2a92m131axhse.cloudfront.net/cms/thumbnails/24/500x200/images/locations/houston.2304191710398.jpg
                  "
                  />
                  <img
                    class="full"
                    src="./assets_src/houston.2304191710398.jpg"
                    alt=""
                    loading="lazy"
                    role="presentation"
                  />
                </picture>

                <address
                  class="rel auto"
                  itemprop="address"
                  itemscope=""
                  itemtype="http://schema.org/PostalAddress"
                >
                  <h3>Houston</h3>
                  <span itemprop="streetAddress">6009 Memorial Drive</span>
                  <br />
                  <span itemprop="addressLocality">Houston</span>,
                  <span itemprop="addressRegion">TX</span>
                  <span itemprop="postalCode">77007</span>
                  <br />
                  <a href="tel:(888) 493-1629">(888) 493-1629</a>
                  <br />
                  <a
                    href="https://www.google.com/maps?cid=14487635134600714720"
                    class="simple-btn"
                    target="_blank"
                  >
                    Get Directions
                    <svg
                      viewBox="0 0 16 16"
                      role="presentation"
                      class="fit"
                      data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#direction"
                    >
                      <path d="M13.551 7.966L11.344 5.759C11.021 5.437 10.497 5.437 10.173 5.759C9.85 6.083 9.85 6.607 10.173 6.93L10.968 7.724H9.655C8.322 7.723 7.039 8.232 6.069 9.147V2.826L6.863 3.62C7.186 3.943 7.71 3.943 8.034 3.62C8.357 3.297 8.357 2.772 8.034 2.449L5.827 0.242C5.672 0.087 5.461 0 5.241 0C5.022 0 4.811 0.087 4.656 0.242L2.449 2.449C2.126 2.772 2.126 3.297 2.449 3.62C2.773 3.943 3.297 3.943 3.62 3.62L4.414 2.826V15.172C4.414 15.63 4.784 16 5.241 16C5.699 16 6.069 15.63 6.069 15.172V12.966C6.07 12.014 6.448 11.103 7.121 10.431C7.793 9.759 8.704 9.381 9.655 9.379H10.968L10.173 10.173C9.85 10.497 9.85 11.021 10.173 11.344C10.497 11.667 11.021 11.667 11.344 11.344L13.551 9.137C13.706 8.982 13.793 8.771 13.793 8.552C13.793 8.333 13.706 8.121 13.551 7.966Z"></path>
                    </svg>
                  </a>
                </address>
              </li>
              <li
                class="half auto nlf-top block-550"
                data-item="i"
                data-key="3796"
              >
                <picture class="rel fit">
                  <source
                    media="(max-width: 550px)"
                    srcset="
                    https://d2a92m131axhse.cloudfront.net/cms/thumbnails/24/500x200/images/locations/louisiana.2304191710399.jpg
                  "
                  />
                  <img
                    class="full"
                    src="./assets_src/louisiana.2304191710399.jpg"
                    alt=""
                    loading="lazy"
                    role="presentation"
                  />
                </picture>

                <address
                  class="rel auto"
                  itemprop="address"
                  itemscope=""
                  itemtype="http://schema.org/PostalAddress"
                >
                  <h3>Louisiana</h3>
                  <span itemprop="streetAddress">835 Louisiana Avenue</span>
                  <br />
                  <span itemprop="addressLocality">Baton Rouge</span>,
                  <span itemprop="addressRegion">LA</span>
                  <span itemprop="postalCode">70802</span>
                  <br />
                  <a href="tel:(225) 412-6348">(225) 412-6348</a>
                  <br />
                  <a
                    href="https://www.google.com/maps?cid=6374277213056684068"
                    class="simple-btn"
                    target="_blank"
                  >
                    Get Directions
                    <svg
                      viewBox="0 0 16 16"
                      role="presentation"
                      class="fit"
                      data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#direction"
                    >
                      <path d="M13.551 7.966L11.344 5.759C11.021 5.437 10.497 5.437 10.173 5.759C9.85 6.083 9.85 6.607 10.173 6.93L10.968 7.724H9.655C8.322 7.723 7.039 8.232 6.069 9.147V2.826L6.863 3.62C7.186 3.943 7.71 3.943 8.034 3.62C8.357 3.297 8.357 2.772 8.034 2.449L5.827 0.242C5.672 0.087 5.461 0 5.241 0C5.022 0 4.811 0.087 4.656 0.242L2.449 2.449C2.126 2.772 2.126 3.297 2.449 3.62C2.773 3.943 3.297 3.943 3.62 3.62L4.414 2.826V15.172C4.414 15.63 4.784 16 5.241 16C5.699 16 6.069 15.63 6.069 15.172V12.966C6.07 12.014 6.448 11.103 7.121 10.431C7.793 9.759 8.704 9.381 9.655 9.379H10.968L10.173 10.173C9.85 10.497 9.85 11.021 10.173 11.344C10.497 11.667 11.021 11.667 11.344 11.344L13.551 9.137C13.706 8.982 13.793 8.771 13.793 8.552C13.793 8.333 13.706 8.121 13.551 7.966Z"></path>
                    </svg>
                  </a>
                  <br />
                  <a
                    class="simple-btn"
                    href="https://www.arnolditkin.com/louisiana/"
                    target="_blank"
                  >
                    View Website
                    <svg
                      viewBox="0 0 16 16"
                      role="presentation"
                      class="fit"
                      data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#site"
                    >
                      <path d="M9.777 1.777C9.286 1.777 8.889 1.38 8.889 0.889C8.889 0.398 9.286 0 9.777 0H15.11C15.346 0 15.573 0.093 15.74 0.26C15.906 0.426 16 0.653 16 0.889V6.222C16 6.713 15.601 7.11 15.11 7.11C14.62 7.11 14.222 6.713 14.222 6.222V3.034L5.961 11.294C5.614 11.642 5.052 11.642 4.705 11.294C4.357 10.948 4.357 10.385 4.705 10.038L12.965 1.777L9.777 1.777ZM0 3.556C0 2.573 0.796 1.777 1.777 1.777H6.222C6.713 1.777 7.11 2.176 7.11 2.666C7.11 3.157 6.713 3.556 6.222 3.556H1.777V14.222H12.444V9.777C12.444 9.286 12.842 8.889 13.333 8.889C13.824 8.889 14.222 9.286 14.222 9.777V14.222C14.222 15.204 13.426 16 12.444 16H1.777C0.796 16 0 15.204 0 14.222L0 3.556Z"></path>
                    </svg>
                  </a>
                </address>
              </li>
              <li
                class="half auto nlf-top block-550"
                data-item="i"
                data-key="3797"
              >
                <picture class="rel fit">
                  <source
                    media="(max-width: 550px)"
                    srcset="
                    https://d2a92m131axhse.cloudfront.net/cms/thumbnails/24/500x200/images/locations/dallas.2304191710398.jpg
                  "
                  />
                  <img
                    class="full"
                    src="./assets_src/dallas.2304191710398.jpg"
                    alt=""
                    loading="lazy"
                    role="presentation"
                  />
                </picture>

                <address
                  class="rel auto"
                  itemprop="address"
                  itemscope=""
                  itemtype="http://schema.org/PostalAddress"
                >
                  <h3>Dallas</h3>
                  <span itemprop="streetAddress">3615 N. Hall Street</span>
                  <br />
                  <span itemprop="addressLocality">Dallas</span>,
                  <span itemprop="addressRegion">TX</span>
                  <span itemprop="postalCode">75219</span>
                  <br />
                  <a href="tel:(469) 208-5535">(469) 208-5535</a>
                  <br />
                  <a
                    href="https://www.google.com/maps?cid=3000474872982418258"
                    class="simple-btn"
                    target="_blank"
                  >
                    Get Directions
                    <svg
                      viewBox="0 0 16 16"
                      role="presentation"
                      class="fit"
                      data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#direction"
                    >
                      <path d="M13.551 7.966L11.344 5.759C11.021 5.437 10.497 5.437 10.173 5.759C9.85 6.083 9.85 6.607 10.173 6.93L10.968 7.724H9.655C8.322 7.723 7.039 8.232 6.069 9.147V2.826L6.863 3.62C7.186 3.943 7.71 3.943 8.034 3.62C8.357 3.297 8.357 2.772 8.034 2.449L5.827 0.242C5.672 0.087 5.461 0 5.241 0C5.022 0 4.811 0.087 4.656 0.242L2.449 2.449C2.126 2.772 2.126 3.297 2.449 3.62C2.773 3.943 3.297 3.943 3.62 3.62L4.414 2.826V15.172C4.414 15.63 4.784 16 5.241 16C5.699 16 6.069 15.63 6.069 15.172V12.966C6.07 12.014 6.448 11.103 7.121 10.431C7.793 9.759 8.704 9.381 9.655 9.379H10.968L10.173 10.173C9.85 10.497 9.85 11.021 10.173 11.344C10.497 11.667 11.021 11.667 11.344 11.344L13.551 9.137C13.706 8.982 13.793 8.771 13.793 8.552C13.793 8.333 13.706 8.121 13.551 7.966Z"></path>
                    </svg>
                  </a>
                  <br />
                  <a
                    class="simple-btn"
                    href="https://www.arnolditkin.com/dallas-personal-injury/"
                    target="_blank"
                  >
                    View Website
                    <svg
                      viewBox="0 0 16 16"
                      role="presentation"
                      class="fit"
                      data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#site"
                    >
                      <path d="M9.777 1.777C9.286 1.777 8.889 1.38 8.889 0.889C8.889 0.398 9.286 0 9.777 0H15.11C15.346 0 15.573 0.093 15.74 0.26C15.906 0.426 16 0.653 16 0.889V6.222C16 6.713 15.601 7.11 15.11 7.11C14.62 7.11 14.222 6.713 14.222 6.222V3.034L5.961 11.294C5.614 11.642 5.052 11.642 4.705 11.294C4.357 10.948 4.357 10.385 4.705 10.038L12.965 1.777L9.777 1.777ZM0 3.556C0 2.573 0.796 1.777 1.777 1.777H6.222C6.713 1.777 7.11 2.176 7.11 2.666C7.11 3.157 6.713 3.556 6.222 3.556H1.777V14.222H12.444V9.777C12.444 9.286 12.842 8.889 13.333 8.889C13.824 8.889 14.222 9.286 14.222 9.777V14.222C14.222 15.204 13.426 16 12.444 16H1.777C0.796 16 0 15.204 0 14.222L0 3.556Z"></path>
                    </svg>
                  </a>
                </address>
              </li>
              <li
                class="half auto nlf-top block-550"
                data-item="i"
                data-key="24045"
              >
                <picture class="rel fit">
                  <source
                    media="(max-width: 550px)"
                    srcset="
                    https://d2a92m131axhse.cloudfront.net/cms/thumbnails/24/500x200/images/locations/midland.2306011442399.jpg
                  "
                  />
                  <img
                    class="full"
                    src="./assets_src/midland.2306011442399.jpg"
                    alt=""
                    loading="lazy"
                    role="presentation"
                  />
                </picture>

                <address
                  class="rel auto"
                  itemprop="address"
                  itemscope=""
                  itemtype="http://schema.org/PostalAddress"
                >
                  <h3>Midland</h3>
                  <span itemprop="streetAddress">1030 Andrews Hwy</span>
                  <br />
                  Suite 204
                  <br />
                  <span itemprop="addressLocality">Midland</span>,
                  <span itemprop="addressRegion">TX</span>
                  <span itemprop="postalCode">79701</span>
                  <br />
                  <a href="tel:(432) 233-0813">(432) 233-0813</a>
                  <br />
                  <a
                    href="https://www.google.com/maps?cid=13082389897886898714"
                    class="simple-btn"
                    target="_blank"
                  >
                    Get Directions
                    <svg
                      viewBox="0 0 16 16"
                      role="presentation"
                      class="fit"
                      data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#direction"
                    >
                      <path d="M13.551 7.966L11.344 5.759C11.021 5.437 10.497 5.437 10.173 5.759C9.85 6.083 9.85 6.607 10.173 6.93L10.968 7.724H9.655C8.322 7.723 7.039 8.232 6.069 9.147V2.826L6.863 3.62C7.186 3.943 7.71 3.943 8.034 3.62C8.357 3.297 8.357 2.772 8.034 2.449L5.827 0.242C5.672 0.087 5.461 0 5.241 0C5.022 0 4.811 0.087 4.656 0.242L2.449 2.449C2.126 2.772 2.126 3.297 2.449 3.62C2.773 3.943 3.297 3.943 3.62 3.62L4.414 2.826V15.172C4.414 15.63 4.784 16 5.241 16C5.699 16 6.069 15.63 6.069 15.172V12.966C6.07 12.014 6.448 11.103 7.121 10.431C7.793 9.759 8.704 9.381 9.655 9.379H10.968L10.173 10.173C9.85 10.497 9.85 11.021 10.173 11.344C10.497 11.667 11.021 11.667 11.344 11.344L13.551 9.137C13.706 8.982 13.793 8.771 13.793 8.552C13.793 8.333 13.706 8.121 13.551 7.966Z"></path>
                    </svg>
                  </a>
                  <br />
                  <a
                    class="simple-btn"
                    href="https://www.arnolditkin.com/midland-personal-injury/"
                    target="_blank"
                  >
                    View Website
                    <svg
                      viewBox="0 0 16 16"
                      role="presentation"
                      class="fit"
                      data-use="/cms/svg/site/u1u1br5b8ke.16.2407091106488.svg#site"
                    >
                      <path d="M9.777 1.777C9.286 1.777 8.889 1.38 8.889 0.889C8.889 0.398 9.286 0 9.777 0H15.11C15.346 0 15.573 0.093 15.74 0.26C15.906 0.426 16 0.653 16 0.889V6.222C16 6.713 15.601 7.11 15.11 7.11C14.62 7.11 14.222 6.713 14.222 6.222V3.034L5.961 11.294C5.614 11.642 5.052 11.642 4.705 11.294C4.357 10.948 4.357 10.385 4.705 10.038L12.965 1.777L9.777 1.777ZM0 3.556C0 2.573 0.796 1.777 1.777 1.777H6.222C6.713 1.777 7.11 2.176 7.11 2.666C7.11 3.157 6.713 3.556 6.222 3.556H1.777V14.222H12.444V9.777C12.444 9.286 12.842 8.889 13.333 8.889C13.824 8.889 14.222 9.286 14.222 9.777V14.222C14.222 15.204 13.426 16 12.444 16H1.777C0.796 16 0 15.204 0 14.222L0 3.556Z"></path>
                    </svg>
                  </a>
                  <em class="blk">By Appointment Only</em>
                </address>
              </li>
            </ul>
          </div>
          <div class="bot-foot">
            <div class="nlf-top-between block-550">
              <div class="nlf">
                <span class="blk">© 2024 All Rights Reserved.</span>
              </div>
              <ul class="nlf">
                <li>
                  <a href="https://www.arnolditkin.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://www.arnolditkin.com/site-map/">Site Map</a>
                </li>
              </ul>
            </div>
            <small class="blk">
              The information on this website is for general information
              purposes only. Nothing on this site should be taken as legal
              advice for any individual case or situation. This information is
              not intended to create, and receipt or viewing does not
              constitute, an attorney-client relationship. The verdicts and
              settlements listed on this site are intended to be representative
              of cases handled by Arnold &amp; Itkin LLP. These listings are not
              a guarantee or prediction of the outcome of any other claims
            </small>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
