import React, { useEffect, useState } from "react";
import "../../Assets/css/style.css";
import "../../Assets/css/colors/red.css";
import "../../Assets/css/plugins.css";
import logo from "../../Assets/img/logo-speaking-school-dark.png";
import logoX2 from "../../Assets/img/logo-speaking-school-dark@2x.png";
import logolight from "../../Assets/img/logo-speaking-school-light.png";
import logolightX2 from "../../Assets/img/logo-speaking-school-light@2x.png";
import videoPoster from "../../Assets/img/photos/movie2.jpg";
import video from "../../Assets/media/hero.mp4";
import brands1 from "../../Assets/img/logo-speaking-school-dark.png";
import brands2 from "../../Assets/img/logo-speaking-school-dark@2x.png";
import brands3 from "../../Assets/img/photos/b4.jpg";
import brands4 from "../../Assets/img/photos/b4.jpg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { getallUsers } from "../../service/api";

export default function New() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await getallUsers();
    console.log(response);
    setUser(response.data);
  };

  console.log(user);
  return (
    <div>
      {" "}
      <div className="content-wrapper">
        <header className="wrapper bg-light">
          <nav className="navbar navbar-expand-lg center-nav transparent navbar-light">
            <div className="container flex-lg-row flex-nowrap align-items-center">
              <div className="navbar-brand w-100">
                <a href="./index.html">
                  <img
                    style={{ width: "136px", height: "56px" }}
                    src={brands1}
                    srcSet={brands2}
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
                      target="_blank"
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

        <section className="wrapper bg-gray mb-10 ">
          <div className="container py-11 pt-md-13 text-center">
            <div className="row">
              <div
                className="col-lg-9 col-xl-8 col-xxl-7 mx-auto"
                data-cues="slideInDown"
                data-group="page-title"
                data-delay="500"
              >
                <h1
                  style={{ opacity: 1 }}
                  className="display-3 post-title ls-sm mb-3"
                >
                  Tin tức
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="blog grid grid-view">
                  <div className="row isotope gx-md-8 gy-8 mb-8">
                    {user.map((data) => {
                      return (
                        <article className="item post col-md-6">
                          <div className="card">
                            <figure className="card-img-top overlay overlay-1 hover-scale">
                              <a href="bai-dang.html">
                                <img src={data.image} alt="" />
                              </a>
                              <figcaption>
                                <h5 className="from-top mb-0">Read More</h5>
                              </figcaption>
                            </figure>
                            <div className="card-body">
                              <div className="post-header">
                                <div className="post-category text-line">
                                  <a href="#" className="hover" rel="category">
                                    Coding
                                  </a>
                                </div>
                                <h2 className="post-title h3 mt-1 mb-3">
                                  <a className="link-dark" href="bai-dang.html">
                                    {data.title}
                                  </a>
                                </h2>
                              </div>
                              <div className="post-content">
                                <p>{data.content}</p>
                              </div>
                            </div>
                            <div className="card-footer">
                              <ul className="post-meta d-flex mb-0">
                                <li className="post-date">
                                  <i className="uil uil-calendar-alt"></i>
                                  <span>14 Apr 2022</span>
                                </li>
                                <li className="post-comments">
                                  <a href="#">
                                    <i className="uil uil-comment"></i>4
                                  </a>
                                </li>
                                <li className="post-likes ms-auto">
                                  <a href="#">
                                    <i className="uil uil-heart-alt"></i>5
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>

                <nav className="d-flex" aria-label="pagination">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">
                          <i className="uil uil-arrow-left"></i>
                        </span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">
                          <i className="uil uil-arrow-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
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
                  src={logolight}
                  srcSet={logolightX2}
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
