import React from "react";
import "../../Assets/css/style.css";
import "../../Assets/css/colors/red.css";
import "../../Assets/css/plugins.css";
import logo from "../../Assets/img/logo-speaking-school-dark.png";
import logoX2 from "../../Assets/img/logo-speaking-school-dark@2x.png";
import logolight from "../../Assets/img/logo-speaking-school-dark@2x.png";
import logolightX2 from "../../Assets/img/logo-speaking-school-light@2x.png";
import videoPoster from "../../Assets/img/photos/movie2.jpg";
import video from "../../Assets/media/hero.mp4";
import brands1 from "../../Assets/img/brands/c1.png";
import brands2 from "../../Assets/img/brands/c2.png";
import brands3 from "../../Assets/img/brands/c3.png";
import brands4 from "../../Assets/img/brands/c4.png";
import brands5 from "../../Assets/img/brands/c5.png";
import brands6 from "../../Assets/img/brands/c6.png";
import brands7 from "../../Assets/img/brands/c7.png";
import brands8 from "../../Assets/img/brands/c8.png";
import brands9 from "../../Assets/img/brands/c9.png";
import brands10 from "../../Assets/img/brands/c10.png";
import brands11 from "../../Assets/img/brands/c11.png";
import meeting from "../../Assets/img/icons/lineal/meeting.svg";
import meeting2 from "../../Assets/img/icons/lineal/megaphone.svg";
import giaovien from "../../Assets/img/illustrations/giao-vien.png";
import te7 from "../../Assets/img/avatars/te7.jpg";
import te7x2 from "../../Assets/img/avatars/te7@2x.jpg";
import te8 from "../../Assets/img/avatars/te8.jpg";
import te8x2 from "../../Assets/img/avatars/te8@2x.jpg";
import te9 from "../../Assets/img/avatars/te9.jpg";
import te9x2 from "../../Assets/img/avatars/te9@2x.jpg";
import te12 from "../../Assets/img/avatars/te12.jpg";
import te12x2 from "../../Assets/img/avatars/te12@2x.jpg";
import te11 from "../../Assets/img/avatars/te11.jpg";
import te11x2 from "../../Assets/img/avatars/te11@2x.jpg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function Client() {
  return (
    <div>
      <div className="content-wrapper">
        <header className="wrapper">
          <nav className="navbar navbar-expand-lg classic transparent position-absolute navbar-dark">
            <div className="container flex-lg-row flex-nowrap align-items-center">
              <div className="navbar-brand w-100">
                <a href="./index.html">
                  <img
                    style={{ width: "136px", height: "56px" }}
                    className="logo-dark"
                    src={logo}
                    srcSet={logoX2}
                    alt=""
                  />
                  <img
                    style={{ width: "136px", height: "56px" }}
                    className="logo-light"
                    src={logolight}
                    srcSet={logolightX2}
                    alt=""
                  />
                </a>
              </div>
              <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                <div className="offcanvas-header d-lg-none">
                  <h3 className="text-white fs-30 mb-0">
                    Speaking School Vietnam
                  </h3>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="index.html">
                        Trang chủ
                      </a>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Lớp học
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="dropdown-item" href="tranh-bien.html">
                            Tranh biện
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="dropdown-item" href="hung-bien.html">
                            Hùng biện
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="giao-vien.html">
                        Giáo viên
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="hoc-sinh.html">
                        Học sinh
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="lien-he.html">
                        Liên hệ
                      </a>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/blog" className="nav-link">
                        Tin tức
                      </NavLink>
                    </li>
                  </ul>
                  <div className="offcanvas-footer d-lg-none">
                    <div>
                      <a
                        href="mailto:tranhbientienganh@gmail.com"
                        className="link-inverse"
                      >
                        tranhbientienganh@gmail.com
                      </a>
                      <br /> 0978 938 091 <br />
                      <nav className="nav social social-white mt-4">
                        <a href="#">
                          <i className="uil uil-facebook-f"></i>
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-other w-100 d-flex ms-auto">
                <ul className="navbar-nav flex-row align-items-center ms-auto">
                  <li className="nav-item d-none d-md-block">
                    <a
                      href="lien-he.html"
                      className="btn btn-primary rounded-pill"
                    >
                      Đăng ký ngay!
                    </a>
                  </li>
                  <li className="nav-item d-lg-none">
                    <button className="hamburger offcanvas-nav-btn">
                      <span></span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <section className="video-wrapper bg-overlay bg-overlay-200 px-0 mt-0 min-vh-100">
          <video
            poster={videoPoster}
            src={video}
            autoPlay
            loop
            playsInline
            muted
          ></video>
          <div className="video-content">
            <div className="container py-11 pt-md-13 text-center">
              <div className="row">
                <div
                  className="col-lg-9 col-xl-8 col-xxl-7 mx-auto"
                  data-cues="slideInDown"
                  data-group="page-title"
                  data-delay="500"
                >
                  <h1
                    style={{ opacity: "1" }}
                    className="display-1 ls-sm fs-64 mb-4 px-md-8 px-lg-0 text-white"
                  >
                    Con tự tin nói{" "}
                    <span className="underline-3 style-3 primary">
                      <em> tiếng anh</em>
                    </span>
                  </h1>
                  <p
                    style={{ opacity: "1" }}
                    className="lead fs-24 lh-sm mb-7 text-white"
                  >
                    Bằng phương pháp học tiếng anh online thông qua tranh biện
                    và hùng biện
                  </p>
                  <div
                    className="d-flex justify-content-center mb-4"
                    data-cues="zoomIn"
                    data-group="page-title-buttons"
                    data-delay="900"
                    style={{ opacity: "1" }}
                  >
                    <span style={{ opacity: "1" }}>
                      <a
                        href="index.html#gioi-thieu"
                        className="btn rounded-pill btn-lg btn-white "
                      >
                        Tìm hiểu thêm
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gioi-thieu" className="wrapper">
          <div className="container pt-14">
            <div className="row gy-10 align-items-center">
              <div className="col-lg-6 order-lg-2">
                <figure>
                  <img className="img-fluid" src={giaovien} alt="" />
                </figure>
              </div>
              <div className="col-lg-5 me-auto">
                <h2 className="fs-15 text-uppercase text-primary mb-3">
                  Giới thiệu
                </h2>
                <h3 className="display-3 post-title ls-sm mb-3">
                  Chúng tôi là ai
                </h3>
                <p>
                  Speaking school Vietnam là trung tâm đào tạo tranh biện và
                  hùng biện bằng tiếng anh theo tiêu chuẩn giảng dạy tại Hoa Kỳ
                  và dành cho trẻ em từ 9 đến 14 tuổi. Chương trình giảng dạy
                  thông qua hình thức học online (trực tuyến).
                </p>
                <p>
                  Speaking School Vietnam giúp các con được học tập như một học
                  sinh Mỹ thực thụ từ đó sẽ phát triển tư duy và kỹ năng một
                  cách toàn diện mà ít trung tâm tiếng Anh hiện nay có thể làm
                  được.
                </p>

                <p>
                  Nếu ba mẹ nhận thấy con mình rụt rè và thiếu sự tự tin khi
                  giao tiếp thì cho con học tranh biện và hùng biện là giải pháp
                  tốt nhất để con có được sự tự tin dám nói ra ý kiến của mình.
                </p>
              </div>
            </div>

            <div className="container py-14 py-md-16">
              <p className="text-center mb-8">Xuất hiện trên</p>
              <div
                className="swiper-container clients mb-0"
                data-margin="30"
                data-dots="false"
                data-loop="true"
                data-autoplay="true"
                data-autoplaytime="1"
                data-drag="false"
                data-speed="5000"
                data-items-xxl="7"
                data-items-xl="6"
                data-items-lg="5"
                data-items-md="4"
                data-items-xs="2"
              >
                <div className="swiper">
                  <div className="swiper-wrapper ticker">
                    <div className="swiper-slide px-5">
                      <img src={brands1} alt="" />
                    </div>
                    <div className="swiper-slide px-5">
                      <img src={brands2} alt="" />
                    </div>
                    <div className="swiper-slide px-5">
                      <img src={brands3} alt="" />
                    </div>
                    <div className="swiper-slide px-5">
                      <img src={brands4} alt="" />
                    </div>
                    <div className="swiper-slide px-5">
                      <img src={brands5} alt="" />
                    </div>
                    <div className="swiper-slide px-5">
                      <img src={brands6} alt="" />
                    </div>
                    <div className="swiper-slide px-5">
                      <img src={brands7} alt="" />
                    </div>
                    <div className="swiper-slide px-5">
                      <img src={brands8} alt="" />
                    </div>
                    <div className="swiper-slide px-5">
                      <img src={brands9} alt="" />
                    </div>
                    <div className="swiper-slide px-5">
                      <img src={brands10} alt="" />
                    </div>
                    <div className="swiper-slide px-5">
                      <img src={brands11} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="lop-hoc"
          className="wrapper bg-light wrapper-border bg-gray"
        >
          <div className="container py-14">
            <div className="row">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
                <h3 className="display-3 mb-10 px-xl-10 px-xxl-15">
                  Các lớp học ở Speaking School Vietnam
                </h3>
              </div>
            </div>
            <div className="row gx-md-5 gy-5">
              <div className="col-md-6 col-xl-4 offset-xl-2">
                <div className="card shadow-lg  border round border-2 border-primary">
                  <div className="card-body">
                    <img
                      style={{ visibility: "initial" }}
                      src={meeting}
                      className="svg-inject icon-svg icon-svg-md text-red mb-3"
                      alt=""
                    />
                    <h4>Lớp tranh biện</h4>
                    <p className="mb-2">
                      Nulla vitae elit libero, a pharetra augue. Donec id elit
                      non mi porta gravida at eget metus cras justo.
                    </p>
                    <ul className="icon-list bullet-primary">
                      <li>
                        <i className="uil uil-check"></i>Dành cho trẻ từ 9 đến
                        14 tuổi.
                      </li>
                      <li>
                        <i className="uil uil-check"></i>Trình độ từ flyer trở
                        lên
                      </li>
                      <li>
                        <i className="uil uil-check"></i>Con nói được câu dài
                      </li>
                      <li>
                        <i className="uil uil-check"></i>Học hoàn toàn bằng
                        tiếng anh
                      </li>
                    </ul>
                    <a href="tranh-bien.html" className="more hover link-red">
                      Tìm hiểu thêm
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <img
                      style={{ visibility: "initial" }}
                      src={meeting2}
                      className="svg-inject icon-svg icon-svg-md text-red mb-3"
                      alt=""
                    />
                    <h4>Lớp hùng biện</h4>
                    <p className="mb-2">
                      Nulla vitae elit libero, a pharetra augue. Donec id elit
                      non mi porta gravida at eget metus cras justo.
                    </p>
                    <ul className="icon-list bullet-primary">
                      <li>
                        <i className="uil uil-check"></i>Dành cho trẻ từ 9 đến
                        14 tuổi.
                      </li>
                      <li>
                        <i className="uil uil-check"></i>Trình độ từ flyer trở
                        lên
                      </li>
                      <li>
                        <i className="uil uil-check"></i>Con nói được câu dài
                      </li>
                      <li>
                        <i className="uil uil-check"></i>Học hoàn toàn bằng
                        tiếng anh
                      </li>
                    </ul>
                    <a href="hung-bien.html" className="more hover link-red">
                      Tìm hiểu thêm
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper bg-light">
          <div className="container py-14">
            <div className="row">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
                <h2 className="fs-15 text-uppercase text-primary mb-3">
                  Góc ba mẹ
                </h2>
                <h3 className="display-4 mb-6 px-xl-10 px-xxl-15">
                  Ba mẹ nói gì sau khi cho con học tranh biện tại Speaking
                  School Vietnam
                </h3>
              </div>
            </div>
            <div data-cue="fadeIn">
              <div
                className="swiper-container dots-closer mb-6"
                data-margin="0"
                data-dots="true"
                data-items-xl="3"
                data-items-md="2"
                data-items-xs="1"
              >
                <div className="swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body">
                            <span className="ratings five mb-3"></span>
                            <blockquote className="icon mb-0">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque.”
                              </p>
                              <div className="blockquote-details">
                                <img
                                  className="rounded-circle w-12"
                                  src={te7}
                                  srcSet={te7x2}
                                  alt=""
                                />
                                <div className="info">
                                  <h5 className="mb-0">Coriss Ambady</h5>
                                  <p className="mb-0">Financial Analyst</p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body">
                            <span className="ratings five mb-3"></span>
                            <blockquote className="icon mb-0">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque.”
                              </p>
                              <div className="blockquote-details">
                                <img
                                  className="rounded-circle w-12"
                                  src={te8}
                                  srcSet={te8x2}
                                  alt=""
                                />
                                <div className="info">
                                  <h5 className="mb-0">Cory Zamora</h5>
                                  <p className="mb-0">Marketing Specialist</p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body">
                            <span className="ratings five mb-3"></span>
                            <blockquote className="icon mb-0">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque.”
                              </p>
                              <div className="blockquote-details">
                                <img
                                  className="rounded-circle w-12"
                                  src={te9}
                                  srcSet={te9x2}
                                  alt=""
                                />
                                <div className="info">
                                  <h5 className="mb-0">Nikolas Brooten</h5>
                                  <p className="mb-0">Sales Manager</p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body">
                            <span className="ratings five mb-3"></span>
                            <blockquote className="icon mb-0">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque.”
                              </p>
                              <div className="blockquote-details">
                                <img
                                  className="rounded-circle w-12"
                                  src={te9}
                                  srcSet={te9x2}
                                  alt=""
                                />
                                <div className="info">
                                  <h5 className="mb-0">Coriss Ambady</h5>
                                  <p className="mb-0">Financial Analyst</p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body">
                            <span className="ratings five mb-3"></span>
                            <blockquote className="icon mb-0">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque.”
                              </p>
                              <div className="blockquote-details">
                                <img
                                  className="rounded-circle w-12"
                                  src={te11}
                                  srcSet={te11x2}
                                  alt=""
                                />
                                <div className="info">
                                  <h5 className="mb-0">Jackie Sanders</h5>
                                  <p className="mb-0">Investment Planner</p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body">
                            <span className="ratings five mb-3"></span>
                            <blockquote className="icon mb-0">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque.”
                              </p>
                              <div className="blockquote-details">
                                <img
                                  className="rounded-circle w-12"
                                  src={te12}
                                  srcSet={te12x2}
                                  alt=""
                                />
                                <div className="info">
                                  <h5 className="mb-0">Laura Widerski</h5>
                                  <p className="mb-0">Sales Specialist</p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-dark text-inverse">
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <div className="d-lg-flex flex-row align-items-lg-center">
            <h3 className="display-4 mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25 text-white">
              Nhận tư vấn và kiểm tra trình độ cho con miễn phí
            </h3>
            <a
              href="lien-he.html"
              className="btn btn-primary rounded-pill mb-0 text-nowrap"
            >
              Đăng ký ngay!
            </a>
          </div>
          <hr className="mt-11 mb-12" />
          <div className="row gy-6 gy-lg-0">
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <img
                  className="mb-4"
                  src="../../Assets/img/logo-speaking-school-light.png"
                  srcSet="../../Assets/img/logo-speaking-school-light@2x.png 2x"
                  alt=""
                />
                <p className="mb-4">
                  © 2023 Speaking School Vietnam.{" "}
                  <br className="d-none d-lg-block" />
                  All rights reserved.
                </p>
                <nav className="nav social social-white">
                  <a href="#">
                    <i className="uil uil-facebook-f"></i>
                  </a>
                </nav>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Liên hệ</h4>
                <a href="mailto:tranhbientienganh@gmail.com">
                  tranhbientienganh@gmail.com
                </a>
                <br /> 0978 938 091
              </div>
            </div>

            <div className="col-md-12 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Lớp học</h4>
                <ul className="list-unstyled  mb-0">
                  <li>
                    <a href="tranh-bien.html">Tranh biện</a>
                  </li>
                  <li>
                    <a href="hung-bien.html">Hùng biện</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Liên kết</h4>
                <ul className="list-unstyled  mb-0">
                  <li>
                    <a href="index.html">Trang chủ</a>
                  </li>
                  <li>
                    <a href="giao-vien.html">Giáo viên</a>
                  </li>
                  <li>
                    <a href="hoc-sinh.html">Học sinh</a>
                  </li>
                  <li>
                    <a href="lien-he.html">Liên hệ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </div>
  );
}
