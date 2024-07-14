import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">FullStack</span>
                  <img
                    src="https://kit8.net/wp-content/uploads/edd/2021/12/kit8net-Realestate-Collection-Header.jpg"
                    alt="Fullstack"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      RealEstate Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/RohithSriNagulaMalyala/RealEstateMern"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Data Science</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWHYGv6JkY8nefI8Ek8uKCQBO0QybzOuXAA&s"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">R</span>
                  <span className="card-detail-badge">Clustering</span>
                  <span className="card-detail-badge">EDA</span>
                  <span className="card-detail-badge">Prediction</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Weather Data Analysis</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/pupperemeritus/WeatherVoyageR"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Machine Learning</span>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAA21BMVEWWy/4yQ1Sc0/8mMj8gMSj/mc9liasvP0+Yzv8dLiKCsdv/mM6UyPmWy/99qtNkh6kqQVEkP05Yd5VPaoWHYoE0RVcVPEpHX3c5TWBVco8tPEs+VGl8XntfUmrykcSYaYsqPj1pVnCjbpJVT2Xli7xfgKBDWnFMTGEAOkZKZH2f1///nte9eaKxdJrNgKzAeqRASFtBXGhtlbYTIgiNvu5ym8JwWXTmi7xEi903T1ZQcIMkNzJfg51/rNceKDLXhLJManwzSk+Gvvhsqe0bHyM0gdh9seYVFA9XmOMLA55fAAANcUlEQVR4nO2dC3ujthKGgzdc1mSDhLGMwZfEDjYOvrBZO0mbTd3T09P2//+iMyOBLwluVo5Th1Tf9gkCAX14MxoNM7Jzor1HfaqcvEsdm0uhFCwJKVgSUrAkpGBJSMGSkIIlIQVLQgqWhBQsCSlYElKwJKRgSUjBkpCCJSEFS0IKloQULAkpWBJSsCSkYElIwZKQgiUhBUtCCpaEFCwJKVgSUrAkpGBJSMGSkIIlIQVLQgqWhBQsCSlYElKwJKRgSUjBkpCCJSEFS0IKloQ+FixzLWzzIxt96xPeCFbF+kfgPNV+rEZurgG2Nc133VD0BU13ZK5OeBtYZz/9fBTb2w9W0zAMx4EfxiiAtqn5sG8KjobRNOEE3mvsZ1ovwKp8ffh8cwzb2g9WLYpcx3HcKGrksByjGUAXbyAso4ba6/YvwKp8P724+Dw/Aq39nga8UeAYboBuKYflGKGpBZGTwwreyGdZ558vQD+VBhYIYXHPvoblgMkZK1hmvV7f895/C2t+iqweHr7/87QOBsuogbPCjbPhs5qH91nWz6cXi4eL76ffygxr1ECnHwXGG8Oqfq1WT0+t70dw8QeExf2Vb2awjLrv+3uOw7/3WRXrHGBZZfZZxsiswyA0NeONHTy6+NPTky//EKBNHRIW7mkrWAPUfqb1L4GlrWCJoDRUsFBm5GSwHEfbhOU4CMsRUrAyWoGZbTFyD4LcP/EWHOTa79YfD9YbSsGSkIIlIQVLQgqWhBQsCSlYElKwJKRgSahcsLbLWBt7mxWvvMfMT9o8PSuIrbu2KmSrCtrmdSWFZTaarlvzs6fxa67rjjChoPm1WpZHMGu1AZyHRYnRADEM8uqEWRNq4KEQu0ZwFZ5qarWV4E6j7I6jZ7RKBMv0RcbAqPGXvprYMRrwTKFhuIHAibkr0xVdjs+TD9nl2fku5rcccarLT8UDuYLIMHy4OxwelNmy6oZjOFHEa1oaT7ZELhwxwIBC2CA0fg7CcuBE6HPMLVgR1lehe4Bs6w50i0wOXJUrgFsBd/GzvLDQBppmEPgRJomxbBMGZtAwMBMTYvEGBiLPIHPLcqAPM33BJqxmliVFuwnRdjJY4KDgRgbczxR9cB+jID9YHlgamFXAR2MU1TgIMxuNDRNhQa85MtaweDKr9gRWnp1xeGksyHOEYlCGuQFHIU9ElxjW+gHQPOBXLx4biSAseOgRtN0Ny2pkVfwc1jrvBwORD8IiWKLG6BT8tsoFa5TDwvEWBZkhgIVA3wCeGgZh3ch8VqNRw6FpbsFaZZTrvDpWCEszgaPwgOWF5eflPrPRGARgQeLJBsKy4OkQRbiClc2UW7DcMKtVoE9yOPsiWA0j/02UFhbCwBArwPUw4gemiSNcyxAKxwUuagUriqKmnzlwEW1mDl7LltTgPFEIC2sbRR6rVLDgCZ2RH2LMUEcXbbihP4h4hMVhmX7IR2XmswIz90kNVB0sq4kFVp8vqeExAtjPB4WFkzofXHxZDJ8A+Y5T1wQsftIaVoY4L375uc8CjNwa0fWPzI8KCwYgf1qXv++YvgjTm9jzHJaxhmXksLKwHqMNvmaLj2v3Oaz6rsUQZYIF06APDjr3vWY9HITZ6+56FRFfUFTf2ufaaK16n+xoW/coO6xjS8GS0FNYT3YVrE1twrLmViU4wRVGuMiILzRSsDa1CWvuG2ePVnWxOHPmlnWzsBSsbW3COhucn4TXvzy62jyojB7Pm5aCtaVNWJXaSWVw3bieR9fu2Se3OaooWFva8lmRcRZeDyrzqOKeNR7PDWVZ29qaDa3F/NF6tM6qVvXMMm6Uz3qi7dDB4v++YOP9zoabBbCt2hihlJLnbSK00eR76x+rzfYtXoL1TO8PVhCOmrUGL4CZfC3toOFnz+lNxr0h4212OxlPPEqx7aFa2JF6uVp06Hl9QlpeG5H1PS/ll7XgFrdsF66SwTL9SLwOj+ANMdgohmmkbeuoCUCh7Q5v2x7ssIS39SWckjV1vRNfJkmXso5up0Sj3SS5hM2tuKzTph8CFn64S/xXM7XAEUkXDot1bHs67thJi5BL3bZ1YGcnPaox2Ong7lWMsGzbFrB0HWBd2fYVA1i6fknIbQKn8VMvi22rXLAwE9WsB5j4NXyE5a4cVqrbvZhRPVky4KbP0ph04bGHBGCN45gubb2vDdN0YuvtdJiSFSywRQGLQrvHGOsBUfYBYOW1T8y8N8Wn5VZ9ib2kjLVvL2lLt6cxGhvQGlOANaMa9XTdA3uhgKKPbmoFC+yIISw4w57E4OvjVq+Xlh8WZpZ5tRCNKgq2LItNYYQteykjdJKPI4aDjFsWjeHgbRGsuzvb5pbFxmiHmtdCtQvHYblg1fhCBE2UnoPcZwlgdMa985hReOpUwOrYHYR1NRkvASW67eewhmCHHsKa2TrVCJ8DknGhiy8XrGeWtQkr1rwZDKpxPNFzy9KFZdncr/Njz2HFcGRp55ZFliDwXeWHhZMhr+hhsRl9luOGIN417PX6lFGYE+Nb3V7GAARd9QR9Vmd2Z+st7rSfw2LxkjsudHXjmDAWT3ZNh+WChbOh65v1UTYbrh08GSb6NGYxeCA+G077NJ3oOB7RwccwV3Z2wdLqHBbByyYaIxO0x8L/fblgYeElW6Q1MlcfAONiS4iephg0UNLnIw9+JB6Ps6aMwdDsFfssCLNaPLQi7Tw8s4cfIc4CWqIA5qDrCowNWJq2FIE6khheiVC8JSL4KQCx9QQR0EmSCFgigk/Q4NhYRPDtO37Z3Q5WpYOlBX6jNsoqYLm/ymyr3e1129m7Yb/by17yCA8ESB82uAdbHkSlrdYQkLVus3PEu6G4xQd5N0Tt/NTu7qyDtk4srBMM20ef3+JDwDqeFCwJKVgSUrAkpGBJSMGSkIIlIQVLQiWERcjTBt+hG7uErKNTQrYu2K6G5ads3Y18nAie9Psi6ZvmDRDTWl1vmL2nEDb0ul7K9+p9VMqouKBO+itpWr8/xNOHfXhbhM4sh0WH6/uWHBbxEv0OM+yklSReZgN0zN+Ar3gNi/bFa/QyJavqV6fL+Dt0O86LYXqSUj2Z4mv0XWIzvFuX08JX7OLcX/lgsaVtiyRLS5QgEM+dzouGtt6imiiE8dxoP0u7iKIYZmcELF4OA1i2zWFd2R2AxUtBeLPOrkTpEWD92Ldx7TSsIT7qmG3CYmPdvrskaY8n+wiQmLbT2yXm+wCW3tXSFlzDOCzaarW6uj2BjfYUFs/5sZn+fmBZ329+5ItPd8GiE92e8trDGhbhWAhh3nTa4vWvGPbiJRoawqIam4DZcFjQQTHvB+dzWDHDtHIGS+8xcsu37wOWdf7t9NeTl41rFywGD9jnAFawsAH7w+EwBbGprfOF2TgCxwxhMRrDwVTAypOkCN62O1if6GSwYPz1KS9f7w/rsF9iZ/18+nBRfdG4drBCMK24gwNmDcuDYwTctFjEcGXbsZYZ3BRg2TOvO0PbK4IlXJ2Apbc69t3M1i/1V8A6O6ysm4eLz99forXLsGDIxHEX8+hbsDyKPR3bXmKtRsxq4N1mrJ0VwgBToWVdXV0tV7D41NBNXwHr4vOB9XBxcXH69QVaOwwLANzNZlN08RwWX1OUJsBIA+cz1PUJVg27mFvGilYXfJbdubPRY2lFsDZ9lu7FEIEs4/7esObfTg8thPXwbS9YdJIPHJvyx2OYBgaj0ifIqoOzP/CE47i+w7YJnw1j9PmsGNbGbAjo6Xickr1hAa3qofXrAxjWS9/XvGMUwojpgsCzdFlLBFcQQQ2xhLXEYGuCTPKVQ4lHEVaPYkWweBhuw4IJEiaO/WFhXHRIVc7/8/BwsXjxW+aLRyFE7xNuTDpE8S0RnAMs0her0GDq1/jiGR524lI2iOCx/zLRwcFP9ITDus2CdarrApbeYev3AdJP9od1UFmLbw+fv+8bOhAvWwxEoaH1e0KXBNc3jqfTXiqekWrd2XTW5Yskh7yfdXu9IbnNrhbH4Ha9HvKBu3aBd6+XLZ1Je73bvYqshxaEWV/n+welhNJ1A8tWNC9dEcrY2hwoZfmZop/iLtk+ttqSrJNo291vAEsuDLNe+bpzVL0alnVubUb4XwDG30b8P/g6cGwuhXo1rEpYOYFIE6bNMzSZM2uxeOUdPzKswbXZDM/nv0Th42JRGc3DxuMBXpCOzaVQh4AVXlujeVS5HgCs2sni/BAvk8fmUqgDDMPrQcVqzMPKvPYYXX86WRzkq/aPzaVQr3fwRsWwrJt5Y1Q7qbgN58xqLtQw3EmLfyqqGl1b/E8TfPnB2ODfCSvTgf90w7G5FOpj/WG1N5aCJSEFS0IKloQULAkpWBJSsCSkYElIwZKQgiUhBUtCCpaEFCwJKVgSUrAkpGBJSMGSkIIlIQVLQgqWhBQsCSlYElKwJKRgSUjBkpCCJaF3AKtS4Wsn8avVoWmJhczH5lKo48OaB4Pqb/f3X/66/+/8F+3R+RRZCtYOWfPfP53fV6z73yp/zQOn1qz+XrUUrF2wgsi9t07+91vl/o8//6zWqn/OFaxdmtd9HIYnf93f/1E7j240Rw3D3Vo7ePGBFeXgZXVsLoV6p7D+D6+1yYQqBpmWAAAAAElFTkSuQmCC"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Python</span>
                  <span className="card-detail-badge">Sortung algorithms</span>

                  <span className="card-detail-badge">Time Complexity</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Time Complexity Analysis of Sorting algorithms</h5>
                  </div>
                  <a className="ad-btn" href="view">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;