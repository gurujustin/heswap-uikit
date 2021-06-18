import React from "react";
import noop from "lodash/noop";
import { BrowserRouter } from "react-router-dom";
import { renderWithTheme } from "../../testHelpers";
import { Menu, menuConfig, LangType } from "../../widgets/Menu";

/**
 * @see https://jestjs.io/docs/en/manual-mocks
 */
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const langs: LangType[] = [...Array(20)].map((_, i) => ({ code: `en${i}`, language: `English${i}` }));

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <BrowserRouter>
      <Menu
        account="0xbdda50183d817c3289f895a4472eb475967dc980"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang="EN"
        cakePriceUsd={0.23158668932877668}
        links={menuConfig}
      >
        body
      </Menu>
    </BrowserRouter>
  );

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bYEvPH cNGsRF"
      >
        <nav
          class="sc-kLgntA jnPcoJ"
        >
          <div
            class="sc-gsTCUz dwpdGQ"
          >
            <button
              aria-label="Toggle menu"
              class="sc-hKgILt cBDcND sc-eCssSg hYyuPy"
              type="button"
            >
              <svg
                class="sc-dlfnbm jEEQkC"
                color="textSubtle"
                viewBox="0 0 24 24"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
                />
              </svg>
            </button>
            <a
              aria-label="Heswap home page"
              class="sc-jSgupP jKPAes"
              href="/"
            >
              <svg
                class="sc-dlfnbm cqTLJf mobile-icon"
                color="text"
                viewBox="0 0 32 32"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <image
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAC/VBMVEUAAADb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08vb08seADLb08tCdc8fATQdAC4fADUZAB0cACgYABkbACQaACEXABUcACsdADAWABIWAA5BdM3a0spAc8tDd9FIh+cAABQVAAsRAABJi+xrof9EetVDedMfBTj//+0DABxEfNjYz8gAAA1Hg+JGguByqf9KjvD/++kAABhEfttAccdFgN0AABFIier69eU9aLohCz8qJ2UpJ2AnH1o9ZbY2UZolGVIiDkMZAC4/bsM+a78jEUcUAAY9cMk6bcY1S5M0SY8mHVYgCTseCjFKj/IvOn1Jje5HheTe1s3WzscyQogrK2odBi9MlflLkPUxQYQwP4AkGk0HAB/99+c8bsc3VqD//Os4V6QhDjYfCTbh2dA8YrLq49c5W6kuOHYrMWsoJlsmI1UiFkQ3Up0sNG8lHlAkFEwjGEgSASj07uA7Ya8sLm/y7N46Xq4qLmRvpf9NmP7t5tnl3tMzRo0oIl8hEz9Om/9Lkvf38eJJfNbo4dXj3NE5a8Q1TpYtM3QPACYgDjsWASsMACN2rf85WqdSpv/v6dxNgNqdk5n//yZQov9on/lXjObQysEJACJdku2HeoYtNXsvPnpxY3VglvBShN2lnZ8yR4p4a3pWRF8RABNmnPbHwLq0q6uUi5FPQVl5tP9Qn/9/dIBmWGw5IEgxGkEAAC6+trS4sK40Gy8CAAPNqABTh+GtpqVbTWNimPSNgotfVGZGMVImFzVIPVNCK081JkQBAEIsHz10VhtANU08L0sMADcVAjaAxf9rV3AtEj5fQyO9mQRUrv/KpSz/9SkUACJafs0REl+4li3/4irYsRT///g1aMBaS3IzLWDiyS5PNSyhfyeVcg6mggBMZrHUxm9iWEXzxxGkoML/3leEalH5MdXqAAAAJHRSTlMAWWYv947hUAnQvJilF7RJ6HAn2K2HH8PvEXo5yn3Gd0E+f35M0WO4AAAgL0lEQVR42tVbB3wb5RUvEJImQIFSCt1Lpzvd1p2WJUWSLVuybMmW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"
                  width="32"
                />
              </svg>
              <svg
                class="sc-dlfnbm cqTLJf desktop-icon"
                color="text"
                viewBox="0 0 174 26"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <image
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAaCAMAAAAZiZe/AAAC91BMVEUAAAD///////////////////////////////////////////////////////////////////3///////////////7///////////////3///r///r//////////////////////////////////////////////////////////////vz///////////////////////////////////////////////////////////////////////////////////////////////////////////////v///3////8+vX///////////////////////////////////////3//////////vqJfYj////m39b////////9+ej+++n//vmmm6C4rqq+tK65sa3EubDMx7n///+6tK/Px7v////////x59b//uv9+uj/////++r//u6CcHKWhYGypqKYh4i/trW+t7KtpqfPx7ypnpPp49nRybnh3dHy79/Ry8X//+zUyr/9+ubs6Nrh18nk3dD+9uDv6tz58eT//+769OT58+T///8AAAADABUBAA0fAzAzSpEeBzgrL2gnJVogDj8GACAZAB0XABRSm/1DdMkvPn0XGU0iGEUfF0AEADkcASkWAScRAiMTAAsAAAdDe9g4Xqw7Xp43UJksN28pKV0kHUsFBEoiEkQQBzocDjYCAS8dBSwAACZ4xf9KheRFes5Bbb49ZrU5YbM6Yq0kMXcuOHZoWGhSQFpTQVUlJVE8KkojGEkaDkUaAyIRAAFfpP5MkPVZlOxVjuk3WaSdlJswS5uOipAwRIouQn9+cn4vQXhzZnMsMm5zXmcQH2MpJGAhLF82M11VS1o9NlElHlECDlEeFU4oFk0vHkMfFjaBbSgTABoNAABuwP9Tqv9spPpLhdU+ddVKdLsrUKVLZ6Q8VJuOhIJMV3BLSGlfUGZsdV5ERFKKjktIPktSM0UpEzd7cjUrJzWslikgGyNdQx4eABsyFhMIAAH8F1ZUAAAAi3RSTlMAgP3dNyheSs+ORzsuCQLwuRXy2J53UduHQx8ZB/jp49XSzcfDs3RqMiISDfrtta6opaKZlnxxblRAPTT05eHLvZB5WVhENisdGhjfxcCvq5tmYk4mFgsF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"
                  width="174"
                />
              </svg>
            </a>
          </div>
          <div
            class="sc-gsTCUz dwpdGQ"
          >
            <div>
              <button
                class="sc-hKgILt eaIAHD"
                type="button"
              >
                0xbd...c980
              </button>
            </div>
          </div>
        </nav>
        <div
          class="sc-iktFzd dABFdo"
        >
          <div
            class="sc-hHftDr kbPZub"
          >
            <div
              class="sc-jrAGrp gTTHkW"
            >
              <div
                class="sc-iBPRYJ ceMrOF"
                role="button"
              >
                <a
                  aria-current="page"
                  class="active"
                  href="/"
                >
                  <svg
                    class="sc-dlfnbm iYpPyE"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"
                    />
                  </svg>
                  <div
                    class="sc-gKsewC kyKIVM"
                  >
                    Home
                  </div>
                </a>
              </div>
              <div
                class="sc-fubCfw ieMlxO"
              >
                <div
                  class="sc-iBPRYJ hwPURs"
                  role="button"
                >
                  <svg
                    class="sc-dlfnbm iYpPyE"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19,8L15,12H18A6,6 0 0,1 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20A8,8 0 0,0 20,12H23M6,12A6,6 0 0,1 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4A8,8 0 0,0 4,12H1L5,16L9,12"
                    />
                  </svg>
                  <div
                    class="sc-gKsewC kyKIVM"
                  >
                    Trade
                  </div>
                  <svg
                    class="sc-dlfnbm cqTLJf"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                    />
                  </svg>
                </div>
                <div
                  class="sc-pFZIQ jDRdjj"
                />
              </div>
              <div
                class="sc-iBPRYJ hwPURs"
                role="button"
              >
                <a
                  href="/farms"
                >
                  <svg
                    class="sc-dlfnbm iYpPyE"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3 2.79L9.8 6.29L10.5 7L11.9 5.61L13 6.71V9C13 10.11 12.11 11 11 11H10.46A6 6 0 0 1 12 15A6 6 0 0 1 11.91 16H15.03A4.5 4.5 0 0 1 19.5 12A4.5 4.5 0 0 1 22 12.76V8C22 6.89 21.11 6 20 6H13.71L12.61 4.9L14 3.5L13.3 2.79M4 7C3.45 7 3 7.45 3 8C3 8.55 3.45 9 4 9H9C9 7.9 8.11 7 7 7H4M6 10A5 5 0 0 0 4.44 10.25L4.8 11.18L4.33 11.36L4 10.43A5 5 0 0 0 1.54 12.74L2.45 13.15L2.24 13.6L1.34 13.2A5 5 0 0 0 1 15A5 5 0 0 0 1.25 16.56L2.18 16.2L2.36 16.67L1.43 17A5 5 0 0 0 3.74 19.46L4.14 18.55L4.6 18.76L4.2 19.66A5 5 0 0 0 6 20A5 5 0 0 0 7.56 19.75L7.2 18.82L7.67 18.64L8 19.57A5 5 0 0 0 10.46 17.26L9.55 16.86L9.76 16.4L10.66 16.8A5 5 0 0 0 11 15A5 5 0 0 0 10.75 13.44L9.82 13.8L9.64 13.33L10.57 13A5 5 0 0 0 8.26 10.54L7.86 11.45L7.4 11.24L7.8 10.34A5 5 0 0 0 6 10M6 12A3 3 0 0 1 9 15A3 3 0 0 1 6 18A3 3 0 0 1 3 15A3 3 0 0 1 6 12M19.5 13A3.5 3.5 0 0 0 16 16.5A3.5 3.5 0 0 0 19.5 20A3.5 3.5 0 0 0 23 16.5A3.5 3.5 0 0 0 19.5 13M19.5 15A1.5 1.5 0 0 1 21 16.5A1.5 1.5 0 0 1 19.5 18A1.5 1.5 0 0 1 18 16.5A1.5 1.5 0 0 1 19.5 15Z"
                    />
                  </svg>
                  <div
                    class="sc-gKsewC kyKIVM"
                  >
                    Farms
                  </div>
                </a>
              </div>
              <div
                class="sc-iBPRYJ hwPURs"
                role="button"
              >
                <a
                  href="/syrup"
                >
                  <svg
                    class="sc-dlfnbm iYpPyE"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.2,5V5C17.8,5 18.4,5 18.9,5.1C19.1,7.4 19.1,12 16.4,15.2C14.4,17.7 11,19 6.4,19C6,19 5.5,19 5.1,19C4.9,14.4 5.8,10.8 7.9,8.5C10.4,5.6 14.4,5 17.2,5M17.2,3C11.7,3 1.6,5.1 3.2,20.8C4.3,20.9 5.4,21 6.4,21C24.3,21 20.7,3.3 20.7,3.3C20.7,3.3 19.3,3 17.2,3M17,7C7,7 7,17 7,17C11,9 17,7 17,7Z"
                    />
                  </svg>
                  <div
                    class="sc-gKsewC kyKIVM"
                  >
                    Pools
                  </div>
                </a>
              </div>
              <div
                class="sc-iBPRYJ hwPURs"
                role="button"
              >
                <a
                  href="/lottery"
                >
                  <svg
                    class="sc-dlfnbm iYpPyE"
                    color="text"
                    viewBox="0 0 26 26"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 10V6C22 4.89 21.1 4 20 4H4C2.9 4 2 4.89 2 6V10C3.11 10 4 10.9 4 12S3.11 14 2 14V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V14C20.9 14 20 13.1 20 12S20.9 10 22 10M20 8.54C18.81 9.23 18 10.53 18 12S18.81 14.77 20 15.46V18H4V15.46C5.19 14.77 6 13.47 6 12C6 10.5 5.2 9.23 4 8.54L4 6H20V8.54M11 15H13V17H11M11 11H13V13H11M11 7H13V9H11Z"
                    />
                  </svg>
                  <div
                    class="sc-gKsewC kyKIVM"
                  >
                    Lottery
                  </div>
                </a>
              </div>
              <div
                class="sc-iBPRYJ hwPURs"
                role="button"
              >
                <a
                  href="/nft"
                >
                  <svg
                    class="sc-dlfnbm iYpPyE"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z"
                    />
                  </svg>
                  <div
                    class="sc-gKsewC kyKIVM"
                  >
                    NFT
                  </div>
                </a>
              </div>
              <div
                class="sc-fubCfw ieMlxO"
              >
                <div
                  class="sc-iBPRYJ hwPURs rainbow"
                  role="button"
                >
                  <svg
                    class="sc-dlfnbm iYpPyE"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z"
                    />
                  </svg>
                  <div
                    class="sc-gKsewC kyKIVM"
                  >
                    Profile & Teams
                  </div>
                  <svg
                    class="sc-dlfnbm cqTLJf"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z"
                    />
                  </svg>
                </div>
                <div
                  class="sc-pFZIQ kcVQrf"
                />
              </div>
              <div
                class="sc-fubCfw ieMlxO"
              >
                <div
                  class="sc-iBPRYJ hwPURs"
                  role="button"
                >
                  <svg
                    class="sc-dlfnbm iYpPyE"
                    color="text"
                    viewBox="0 0 26 26"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13,2.05V5.08C16.39,5.57 19,8.47 19,12C19,12.9 18.82,13.75 18.5,14.54L21.12,16.07C21.68,14.83 22,13.45 22,12C22,6.82 18.05,2.55 13,2.05M12,19A7,7 0 0,1 5,12C5,8.47 7.61,5.57 11,5.08V2.05C5.94,2.55 2,6.81 2,12A10,10 0 0,0 12,22C15.3,22 18.23,20.39 20.05,17.91L17.45,16.38C16.17,18 14.21,19 12,19Z"
                    />
                  </svg>
                  <div
                    class="sc-gKsewC kyKIVM"
                  >
                    Info
                  </div>
                  <svg
                    class="sc-dlfnbm cqTLJf"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                    />
                  </svg>
                </div>
                <div
                  class="sc-pFZIQ jDRdjj"
                />
              </div>
              <div
                class="sc-fubCfw ieMlxO"
              >
                <div
                  class="sc-iBPRYJ hwPURs"
                  role="button"
                >
                  <svg
                    class="sc-dlfnbm iYpPyE"
                    color="text"
                    viewBox="0 0 26 26"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M19.22 4C19.5 4 19.75 4 19.96 4.05C20.13 5.44 19.94 8.3 16.66 11.58C14.96 13.29 12.93 14.6 10.65 15.47L8.5 13.37C9.42 11.06 10.73 9.03 12.42 7.34C15.18 4.58 17.64 4 19.22 4M19.22 2C17.24 2 14.24 2.69 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.62 17.27 10.13 17.5 10.66 17.5C10.89 17.5 11.13 17.44 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39S20.7 2 19.22 2M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46M8.88 16.53L7.47 15.12L8.88 16.53M6.24 22L9.88 18.36C9.54 18.27 9.21 18.12 8.91 17.91L4.83 22H6.24M2 22H3.41L8.18 17.24L6.76 15.83L2 20.59V22M2 19.17L6.09 15.09C5.88 14.79 5.73 14.47 5.64 14.12L2 17.76V19.17Z"
                    />
                  </svg>
                  <div
                    class="sc-gKsewC kyKIVM"
                  >
                    IFO
                  </div>
                  <svg
                    class="sc-dlfnbm cqTLJf"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                    />
                  </svg>
                </div>
                <div
                  class="sc-pFZIQ jDRdjj"
                />
              </div>
              <div
                class="sc-fubCfw ieMlxO"
              >
                <div
                  class="sc-iBPRYJ hwPURs"
                  role="button"
                >
                  <svg
                    class="sc-dlfnbm iYpPyE"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"
                    />
                  </svg>
                  <div
                    class="sc-gKsewC kyKIVM"
                  >
                    More
                  </div>
                  <svg
                    class="sc-dlfnbm cqTLJf"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                    />
                  </svg>
                </div>
                <div
                  class="sc-pFZIQ jDRdjj"
                />
              </div>
            </div>
            <div
              class="sc-fFubgz kaEsai"
            >
              <button
                class="sc-hKgILt eBhaKk sc-fodVxV isuojT"
                type="button"
              >
                <svg
                  class="sc-dlfnbm cqTLJf"
                  color="text"
                  viewBox="0 0 24 24"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            class="sc-jJEJSO jxRCvt"
          >
            body
          </div>
          <div
            class="sc-bdfBwQ sc-hiSbYr cWRVeF klxusr"
            role="presentation"
          />
        </div>
      </div>
    </DocumentFragment>
  `);
});
