<?php

require './src/php_libs/md.php';
$section = github_md_file('./test.md');

?>

<!DOCTYPE html>
<html lang="en" class="no-js">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TPD - Professionals for every sector</title>

    <!-- FAVICON -->
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/src/images/icons/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/src/images/icons/apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/src/images/icons/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/src/images/icons/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/src/images/icons/apple-touch-icon-60x60.png" />
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/src/images/icons/apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/src/images/icons/apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/src/images/icons/apple-touch-icon-152x152.png" />
    <link rel="icon" type="image/png" href="/src/images/icons/favicon-196x196.png" sizes="196x196" />
    <link rel="icon" type="image/png" href="/src/images/icons/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/png" href="/src/images/icons/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="/src/images/icons/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" type="image/png" href="/src/images/icons/favicon-128.png" sizes="128x128" />

    <link rel="apple-touch-icon" sizes="180x180" href="/src/images/icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/src/images/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/src/images/icons/favicon-16x16.png">
    <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />

    <meta name="application-name" content="TPD" />
    <meta name="msapplication-TileColor" content="#20242b" />
    <meta name="msapplication-TileImage" content="/src/images/icons/mstile-144x144.png" />
    <meta name="msapplication-square70x70logo" content="/src/images/icons/mstile-70x70.png" />
    <meta name="msapplication-square150x150logo" content="/src/images/icons/mstile-150x150.png" />
    <meta name="msapplication-wide310x150logo" content="/src/images/icons/mstile-310x150.png" />
    <meta name="msapplication-square310x310logo" content="/src/images/icons/mstile-310x310.png" />

    <link rel="manifest" href="site.webmanifest">
    <!-- /FAVICON -->

    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600" rel="stylesheet">
    <link rel="stylesheet" href="dist/css/style.css">
    <script src="https://unpkg.com/animejs@3.0.1/lib/anime.min.js"></script>
    <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
</head>

<body class="is-boxed has-animations">
    <div class="body-wrap">
        <header class="site-header">
            <div class="container">
                <div class="site-header-inner">
                    <div class="brand header-brand">
                        <h1 class="m-0">
                            <a href="#">
                                <img class="header-logo-image" src="dist/images/logo.svg" alt="Logo">
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <section class="hero">
                <div class="container">
                    <div class="hero-inner">
                        <div class="hero-copy">
                            <h1 class="hero-title mt-0">Seconds saved today yields years tomorrow!
                            </h1>
                            <p class="hero-paragraph">Given the exceptional performance of our team and business model,
                                we are now
                                expanding our operations to another facility in the great state of Minnesota. Our
                                concepts and services will better align your
                                businesses, clients and communities with long term sustainability, growth, safety,
                                happiness
                                and higher yields. Don't just stop at running smoothly; evolve your process beyond the
                                current pace.
                            </p>
                            <div class="hero-cta"><a class="button button-primary" href="#retain_us">Retain Us</a><a class="button" href="#">Get in touch</a></div>
                        </div>
                        <div class="hero-figure anime-element">
                            <svg class="placeholder" width="528" height="396" viewBox="0 0 528 396">
                                <rect width="528" height="396" style="fill:transparent;" />
                            </svg>
                            <div class="hero-figure-box hero-figure-box-01" data-rotation="45deg"></div>
                            <div class="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
                            <div class="hero-figure-box hero-figure-box-03" data-rotation="0deg"></div>
                            <div class="hero-figure-box hero-figure-box-04" data-rotation="-135deg"></div>
                            <div class="hero-figure-box hero-figure-box-05"></div>
                            <div class="hero-figure-box hero-figure-box-06"></div>
                            <div class="hero-figure-box hero-figure-box-07"></div>
                            <div class="hero-figure-box hero-figure-box-08" data-rotation="-22deg"></div>
                            <div class="hero-figure-box hero-figure-box-09" data-rotation="-52deg"></div>
                            <div class="hero-figure-box hero-figure-box-10" data-rotation="-50deg"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="features section">
            <?php echo $section ?>
            </section>
            <section class="features section">
                <div class="container">
                    <div class="features-inner section-inner has-bottom-divider">
                        <div class="features-wrap">
                            <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
                                        <img src="dist/images/feature-icon-01.svg" alt="Feature 01">
                                    </div>
                                    <h4 class="feature-title mt-24">Manufacturing</h4>
                                    <p class="text-sm mb-0">Tris, Park, Des.</p>
                                </div>
                            </div>
                            <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
                                        <img src="dist/images/feature-icon-02.svg" alt="Feature 02">
                                    </div>
                                    <h4 class="feature-title mt-24">On Demand Service</h4>
                                    <p class="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat
                                        nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis.
                                        Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
                            <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
                                        <img src="dist/images/feature-icon-03.svg" alt="Feature 03">
                                    </div>
                                    <h4 class="feature-title mt-24">Transportation</h4>
                                    <p class="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat
                                        nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis.
                                        Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
                            <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
                                        <img src="dist/images/feature-icon-04.svg" alt="Feature 04">
                                    </div>
                                    <h4 class="feature-title mt-24">Construction</h4>
                                    <p class="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat
                                        nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis.
                                        Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
                            <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
                                        <img src="dist/images/feature-icon-04.svg" alt="Feature 04">
                                    </div>
                                    <h4 class="feature-title mt-24">Healthcare</h4>
                                    <p class="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat
                                        nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis.
                                        Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
                            <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
                                        <img src="dist/images/feature-icon-05.svg" alt="Feature 05">
                                    </div>
                                    <h4 class="feature-title mt-24">Hospitality</h4>
                                    <p class="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat
                                        nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis.
                                        Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
                            <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
                                        <img src="dist/images/feature-icon-06.svg" alt="Feature 06">
                                    </div>
                                    <h4 class="feature-title mt-24">Education Center</h4>
                                    <p class="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat
                                        nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis.
                                        Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="pricing section">
                <div class="container-sm">
                    <div class="pricing-inner section-inner">
                        <div class="pricing-header text-center">
                            <h2 class="section-title mt-0">Unlimited for all</h2>
                            <p class="section-paragraph mb-0">Whats up Guys, don't forget to email me so we can get you
                                all set up. Objectively, we will utilize AI an gap analysis to establish free perpetual
                                marketing in our area
                            </p>
                        </div>
                        <div class="pricing-tables-wrap" id="retain_us">
                            <div class="pricing-table">
                                <div class="pricing-table-inner is-revealing">
                                    <div class="pricing-table-main">
                                        <div class="pricing-table-header pb-24">
                                            <div class="pricing-table-price"><span class="pricing-table-price-currency h2">$</span><span class="pricing-table-price-amount h1">6,500</span><span class="text-xs">/Quarterly</span></div>
                                        </div>
                                        <div class="pricing-table-features-title text-xs pt-24 pb-24">What you will get
                                        </div>
                                        <ul class="pricing-table-features list-reset text-xs">
                                            <li>
                                                <span>24 Hour Telephone Standby</span>
                                            </li>
                                            <li>
                                                <span>One Group Training Sesson</span>
                                            </li>
                                            <li>
                                                <span>Four Deligated Shadow Observations</span>
                                            </li>
                                            <li>
                                                <span>Two Non-Deligated Shadow Observations</span>
                                            </li>
                                            <li>
                                                <span>Access to Global Training and Disaster Response Team</span>
                                            </li>
                                            <li>
                                                <span>Comprihensive Risk, Effecincey and Safety Assments</span>
                                            </li>
                                            <li>
                                                <span>Comprihensive Risk, Effecincey and Safety Assments</span>
                                            </li>
                                            <li>
                                                <span>Measurable gains in productivity post procedure updates</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="pricing-table-cta mb-8">
                                        <a class="button button-primary button-shadow button-block" href="#retain_us">Retain us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="cta section">
                <div class="container">
                    <div class="cta-inner section-inner">
                        <h3 class="section-title mt-0">Still not convinced on buying?</h3>
                        <div class="cta-cta">
                            <a class="button button-primary button-wide-mobile" href="#">Get in touch</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="site-footer">
            <div class="container">
                <div class="site-footer-inner">
                    <div class="brand footer-brand">
                        <a href="#">
                            <img class="header-logo-image" src="dist/images/logo.svg" alt="Logo">
                        </a>
                    </div>
                    <ul class="footer-links list-reset">
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">FAQ's</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                    </ul>
                    <ul class="footer-social-links list-reset">
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100089728120759">
                                <span class="screen-reader-text">Facebook</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#0270D7" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="screen-reader-text">Twitter</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#0270D7" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="screen-reader-text">Google</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#0270D7" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div class="footer-copyright">&copy; 2022 TPD Inc., all rights reserved</div>
                </div>
            </div>
        </footer>
    </div>

    <script src="dist/js/main.min.js"></script>
</body>

</html>