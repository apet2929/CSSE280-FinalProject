import * as React from "react";
import Canvas from "./Canvas";
import County from "./County";
import ServiceCategoryPopup from "./ServiceCategoryPopup";

let county_svgs = [
  <path d="M 549.16 223.67 566.5 223.17 565.25 170.85 590.81 170.41 604.9 169.85 606.24 204.64 607.32 239.48 587.15 240.12 549.76 240.93 549.16 223.67 Z" id="Wells" fill="#b3c4db"/>,
  <path d="M 299.12 244.04 325.03 244.28 348.4 244.12 359.94 244.12 360.16 269.96 360.2 313.34 299.54 313.39 299.6 283.15 299.37 261.41 299.12 244.04 Z" id="Tippecanoe" fill="#b8e0da"/>,
  <path id="Jackson" fill="#b1e486" d="M 419.89 545.13 442.54 544.97 456.86 544.48 456.94 547.32 491.04 545.93 493.07 542.13 496.81 540.11 500.56 540.29 501.83 592.27 496.49 601.29 494.79 605.59 490.94 608 487.51 607.02 476.12 601.24 473.68 603.62 470.36 601.97 467.7 602.78 463.68 602.05 460.59 598.85 458.27 599.35 454.95 597.85 454.52 600.55 448.95 601.9 441.02 597.9 435.01 598.71 432.05 601.43 427.05 601.84 425.85 556.59 420.09 556.67 419.89 545.13 Z" />,
  <path id="Harrison" fill="#cbdc93" d="M 430.82 669.74 465.68 670.34 465.92 687.67 468.78 687.67 468.86 693.42 471.84 693.57 472.36 699.15 475.3 699.12 475.31 702.05 478.24 702.08 477.97 716.38 487 716.33 487.18 717.39 485.91 721.17 486.51 735.61 484.84 741.21 483.47 749.02 480.13 752.39 475.35 752.78 467.78 754.64 466.25 757.28 466.46 760.61 464 761.46 461.62 758.47 459.28 753.52 455.34 751.17 451.53 750.5 443.93 751.76 436.94 748.25 434.93 745.99 429.56 742.62 427.86 737.52 427.61 733.88 428.95 728.09 426.25 722.51 419.51 717.83 421.46 718.52 423.12 713.66 424.93 713.4 427.73 708.72 427.98 698.19 429.49 695.01 427.62 686.18 428.47 681.99 431.37 673.03 430.82 669.74 Z"/>,
  <path d="M 324.01 109.77 325.45 108.12 333 104.22 341.37 102.41 346.05 100.01 349.36 95.59 352.56 92.77 354.97 85.06 357.36 80.94 358.5 76.62 362.82 74.38 367.1 70.6 384.78 70.45 393.5 70.37 393.81 122.48 324.02 122.61 324.01 109.77 Z" id="Starke" fill="#94bbeb"/>,
  <path d="M 427.05 601.84 432.05 601.43 435.01 598.71 441.02 597.9 448.95 601.9 454.52 600.55 454.95 597.85 458.27 599.35 460.59 598.85 463.68 602.05 467.7 602.78 470.36 601.97 473.68 603.62 476.12 601.24 487.51 607.02 488.35 638.69 494.15 638.44 494.29 641.43 494.38 644.24 491.44 644.29 491.53 650 488.64 650.09 488.67 653.02 477.35 653.46 477.52 656.05 471.71 656.2 471.67 670.18 465.68 670.34 430.82 669.74 422.41 669.78 422.13 620.24 421.96 616.96 421.76 608.48 424.48 607.58 425.3 603.59 427.05 601.84 Z" id="Washington" fill="#d8e9e9"/>,
  <path d="M 197.39 671.61 204.23 670.16 207.27 668.21 210.44 663.48 218.45 665.29 220.07 664.51 224.15 656.5 229.37 656.2 227.95 652.42 229.94 651.08 231.35 655.02 236.98 653.73 239.8 652.25 241.52 648.29 241.53 661.63 244.35 661.69 244.32 667.54 250.15 667.52 250.07 679.63 254.4 678.08 258.65 677.63 264.45 679.72 264.23 705.45 264.19 714.27 240.64 714.29 240.53 721.43 205.74 720.65 205.81 714.16 188.28 713.85 188.4 708.54 159.39 707.94 163.1 706.62 164.73 698.74 167.4 694.96 171.41 695.71 169.96 698.13 171.55 700.23 174.56 697.13 175.81 693.15 178.97 698.88 181.52 698.61 183.52 694.41 183.4 688.91 184.78 685.14 187.53 681.74 191.14 680.63 197.39 671.61 Z" id="Gibson" fill="#cdec98"/>,
  <path d="M 298.54 574.48 308.41 574.78 328.84 574.4 328.88 591.67 325.96 591.73 325.87 653.84 323.43 655.9 320.86 654.23 317.95 654.53 314.94 652.32 310.02 653.45 306.94 652.76 303.85 654.42 302.66 652 299.68 650.51 297.14 647.42 292.8 651.11 290.31 651.77 289.32 649.01 286.52 646.17 281.57 644.62 279.4 647.18 276.09 645.96 276.77 639.83 275.29 638.35 276.17 631.05 274.43 628.72 276.27 625.52 274.19 624.18 272.26 614.93 273.81 610.73 272.92 609.04 275.74 605.41 273.72 601.41 276.06 599.31 276.53 591.33 279.85 591.37 286.2 589.16 287.38 585.83 292.02 586.51 292.76 580.85 298.54 574.48 Z" id="Daviess" fill="#d5bca5"/>,
  <path d="M 241.52 648.29 249.6 649.55 250.87 646.59 253.91 647.33 254.19 650.8 257.4 650.27 256.05 647.28 259.06 646.58 266.65 652.81 269.19 652.35 273.93 649.61 276.09 645.96 279.4 647.18 281.57 644.62 286.52 646.17 289.32 649.01 290.31 651.77 292.8 651.11 297.14 647.42 299.68 650.51 302.66 652 302.56 708.18 277.44 708.49 267.14 708.32 267.17 705.49 264.23 705.45 264.45 679.72 258.65 677.63 254.4 678.08 250.07 679.63 250.15 667.52 244.32 667.54 244.35 661.69 241.53 661.63 241.52 648.29 Z" id="Pike" fill="#dbe5d2"/>,
  <path d="M 555.85 514.08 577.82 499.19 589.85 490.94 603.03 490.27 613.44 490.68 611.29 507.66 606.02 551.62 604.62 562.45 604.18 566.14 593.75 566.57 593.76 569.5 556.11 570.39 555.83 552.93 555.85 514.08 Z" id="Ripley" fill="#9a94d1"/>,
  <path d="M 429.09 281.13 429.06 275.31 487.08 273.84 487.13 279.52 487.64 293.99 487.63 311.28 429.43 312.57 429.09 281.13 Z" id="Tipton" fill="#e8ead8"/>,
  <path d="M 280.1 32.59 280.43 55.92 280.36 90.54 280.55 108.73 279.41 110.03 271.95 113.38 264.6 119.82 256.1 122.52 254.16 124.45 251.06 124.55 246.99 122.37 234.15 123.7 234.27 97.39 234.76 40.11 235.07 15.67 242.19 22.3 249.89 19.37 252.29 23.33 248.63 27.55 258.22 31.37 270.21 33.23 280.1 32.59 Z" id="Lake" fill="#bbea90"/>,
  <path d="M 532.22 365.03 531.78 338.86 558.2 338.52 587.2 337.86 587.64 352.3 589.48 352.23 590.11 378.27 587.07 378.38 587.37 395.34 574.99 395.76 529.57 396.8 529.32 379.59 532.37 379.56 532.22 365.03 Z" id="Henry" fill="#cde2b7"/>,
  <path d="M 518.4 154.71 547.35 153.62 564.95 153.28 565.25 170.85 566.5 223.17 549.16 223.67 520.35 224.27 518.4 154.71 Z" id="Huntington" fill="#c4e4e2"/>,
  <path d="M 616.4 409.39 616.36 406.5 626.36 406.76 650.28 406.21 651.12 446.99 633.56 446.93 619.08 447.27 617.02 446.96 616.4 409.39 Z" id="Union" fill="#cee8ef"/>,
  <path d="M 232.54 574.63 276.38 574.93 276.39 573.68 293.7 573.81 298.54 574.48 292.76 580.85 292.02 586.51 287.38 585.83 286.2 589.16 279.85 591.37 276.53 591.33 276.06 599.31 273.72 601.41 275.74 605.41 272.92 609.04 273.81 610.73 272.26 614.93 274.19 624.18 276.27 625.52 274.43 628.72 276.17 631.05 275.29 638.35 276.77 639.83 276.09 645.96 273.93 649.61 269.19 652.35 266.65 652.81 259.06 646.58 256.05 647.28 257.4 650.27 254.19 650.8 253.91 647.33 250.87 646.59 249.6 649.55 241.52 648.29 239.8 652.25 236.98 653.73 231.35 655.02 229.94 651.08 227.95 652.42 229.37 656.2 224.15 656.5 220.07 664.51 218.45 665.29 210.44 663.48 207.27 668.21 204.23 670.16 197.39 671.61 199.28 664.37 195.53 663.33 197.33 659.08 202.13 658.6 206.55 656.24 208.69 653.16 212.93 652.64 209.23 646.32 212.15 643.45 213.91 639.9 216.53 637.51 215.86 633.68 220.63 621.78 230.97 618.11 235.06 607.98 236.58 597.94 231.71 591.41 232.6 589.73 231.96 585.3 229.38 581.73 229.14 577.29 232.54 574.63 Z" id="Knox" fill="#c7d5e6"/>,
  <path d="M 604.9 169.85 634.06 168.58 645.86 167.9 646.61 192.2 647.78 237.7 607.32 239.48 606.24 204.64 604.9 169.85 Z" id="Adams" fill="#bce4ec"/>,
  <path d="M 311.3 713.95 323.09 714.07 346.84 713.57 346.89 718.56 345.1 720.5 346.27 723.09 345.48 726.63 347.48 733.57 350.59 734.47 348.61 738.8 350.74 743.07 348.94 744.45 350 754.76 347.12 753.7 343.5 754.8 336.81 756.98 329.57 765.13 325.81 767.39 317.42 768.38 312.15 770.68 306.97 775.53 307.27 780.67 305.16 788.84 303.11 794.02 298.94 797.25 293.62 796.98 291.75 791.07 288.08 786.08 279.29 784.53 271.61 778.76 271.8 769.37 278.48 760.12 284.78 755.18 287.52 750.81 289.99 749.8 289.48 746.21 290.77 742.74 294.49 745.75 300.13 744.6 298.65 742.68 299.61 738.93 302.23 735.3 303 730.98 311.32 730.93 311.3 713.95 Z" id="Spencer" fill="#f3d7d4"/>,
  <path d="M 346.84 713.57 346.71 704.82 364.5 704.96 364.4 701.97 381.59 701.24 381.41 712.95 398.91 712.98 398.93 730.04 399.31 735.05 403.22 736.86 403.45 740.76 400.41 744.1 390.16 745.73 388.97 748.68 389.01 760.56 391.91 766.87 391.3 768.93 387.65 770.76 379.06 769.99 377.29 772.86 377.61 780.7 376.59 782.52 371.29 785.65 368.12 785.38 367.44 782.83 370.21 775.28 369.36 772.13 363.68 771.67 358.57 775.66 356.52 775.43 353.42 771.75 348.83 763.28 346.34 756.52 343.5 754.8 347.12 753.7 350 754.76 348.94 744.45 350.74 743.07 348.61 738.8 350.59 734.47 347.48 733.57 345.48 726.63 346.27 723.09 345.1 720.5 346.89 718.56 346.84 713.57 Z" id="Perry" fill="#cee9e7"/>,
  <path d="M 363.47 617.64 398.32 617.03 399.02 617.25 421.96 616.96 422.13 620.24 422.41 669.78 422.43 675.51 400.02 675.21 363.99 675.75 363.73 649.54 363.47 617.64 Z" id="Orange" fill="#e8c7b1"/>,
  <path d="M 276.52 521.12 305.41 521.87 328.58 521.9 363.07 522.2 363.33 556.73 363.32 574.2 328.84 574.4 308.41 574.78 298.54 574.48 293.7 573.81 276.39 573.68 276.52 521.12 Z" id="Greene" fill="#f4ddd3"/>,
  <path d="M 370.99 486.08 370.99 487.31 396.65 487.65 409.6 487.26 409.97 504.92 411.13 504.95 411.9 537.06 411.81 545.28 419.89 545.13 420.09 556.67 363.33 556.73 363.07 522.2 362.51 488.29 365.3 489.58 368.08 484.38 370.99 486.08 Z" id="Monroe" fill="#b6a8f0"/>,
  <path d="M 376.85 174.49 393.95 174.59 428.16 174.47 439.26 174.21 439.56 182.94 439.63 207.34 440.59 243.37 408.75 243.92 408.67 217.8 385.66 217.97 385.61 209.4 377.02 209.39 377.12 191.65 376.85 174.49 Z" id="Cass" fill="#e7d5a7"/>,
  <path d="M 323.45 15.58 326.97 12.1 332 9.9 339.55 5.44 384.43 5.38 384.21 27.1 390.06 27.29 390.34 42.98 388.59 44.88 388.64 50.79 387.83 53.16 384.64 53.16 384.78 70.45 367.1 70.6 362.82 74.38 358.5 76.62 357.36 80.94 354.97 85.06 352.56 92.77 349.36 95.59 346.05 100.01 341.37 102.41 333 104.22 325.45 108.12 324.01 109.77 323.89 87.83 323.94 50.14 323.55 33.96 323.45 15.58 Z" id="LaPorte" fill="#f1c9ad"/>,
  <path d="M 556.11 570.39 593.76 569.5 594.18 592.77 594.94 613.86 591.01 610.99 587.74 605.89 584.27 604.29 578.51 604.13 568.1 606.54 562.15 605.32 558.11 607.11 555.68 611.2 555.28 616.41 557.98 620.9 558 630.42 559.83 635.4 551.98 635.57 549.19 634.42 549.11 631.53 537.64 631.84 537.26 617.44 531.43 617.48 531.26 611.68 525.47 611.74 525.33 607.39 519.51 606.11 519.2 590.45 519.13 588.76 530.59 588.51 530.43 582.63 536.23 582.54 536.13 576.78 541.8 576.66 541.58 570.8 556.11 570.39 Z" id="Jefferson" fill="#a5a7e4"/>,
  <path d="M 549.76 240.93 587.15 240.12 587.56 257.6 586.7 257.65 587.08 277.61 585.09 277.68 568.04 278.19 550.86 278.34 549.76 240.93 Z" id="Blackford" fill="#c6edcf"/>,
  <path d="M 516.22 96.46 533.61 96.07 533.58 101.87 568.11 101.61 568.15 118.53 563.82 118.64 564.95 153.28 547.35 153.62 518.4 154.71 512.46 154.89 512.17 145.97 511.39 119.74 516.49 119.63 516.22 96.46 Z" id="Whitley" fill="#abe3a6"/>,
  <path d="M 487.51 607.02 490.94 608 494.79 605.59 496.49 601.29 501.83 592.27 505.36 591.8 509.25 589.23 513.04 589.02 519.2 590.45 519.51 606.11 525.33 607.39 525.47 611.74 531.26 611.68 531.43 617.48 537.26 617.44 537.64 631.84 509.49 632.34 502.67 632.64 498.39 638.56 498.48 641.34 494.29 641.43 494.15 638.44 488.35 638.69 487.51 607.02 Z" id="Scott" fill="#8e94e1"/>,
  <path d="M 363.99 675.75 400.02 675.21 422.43 675.51 422.41 669.78 430.82 669.74 431.37 673.03 428.47 681.99 427.62 686.18 429.49 695.01 427.98 698.19 427.73 708.72 424.93 713.4 423.12 713.66 421.46 718.52 419.51 717.83 415.07 714.46 412.55 715.57 412.01 719.95 413.82 721.89 419.81 723.19 420.9 724.73 417.88 728.59 412.41 728.06 407.76 733.04 403.88 729.19 398.93 730.04 398.91 712.98 381.41 712.95 381.59 701.24 364.4 701.97 363.99 675.75 Z" id="Crawford" fill="#c6a2a0"/>,
  <path d="M 604.62 562.45 606.02 551.62 611.29 507.66 613.44 490.68 651.58 490.19 652.46 529.97 646.3 535.57 641.98 538.02 640.82 540.65 643.93 544.9 640.86 548.61 638.59 547.56 633.83 549.84 632.21 552.5 625.42 552.27 624.07 556.07 618.66 556.69 616.14 560.2 612.1 561.67 610.13 564.83 607.59 564.76 604.62 562.45 Z" id="Dearborn" fill="#a0abe9"/>,
  <path d="M 360.21 320.46 400.58 320.55 429.55 319.56 430.28 370.29 417.15 370.82 395.3 371.23 360.54 371.43 360.21 320.46 Z" id="Boone" fill="#9fc4c7"/>,
  <path d="M 486 225.07 520.35 224.27 549.16 223.67 549.76 240.93 550.86 278.34 530.39 278.62 487.13 279.52 487.08 273.84 486.41 242.24 486 225.07 Z" id="Grant" fill="#d5d6f7"/>,
  <path d="M 363.32 574.2 363.33 556.73 420.09 556.67 425.85 556.59 427.05 601.84 425.3 603.59 424.48 607.58 421.76 608.48 421.96 616.96 399.02 617.25 398.32 617.03 363.47 617.64 363.32 574.2 Z" id="Lawrence" fill="#c7f1bc"/>,
  <path d="M 513.52 3.96 566.02 2.79 582.66 2.51 584.08 48.99 529.48 50.41 515.05 50.93 513.52 3.96 Z" id="LaGrange" fill="#ccdfe7"/>,
  <path d="M 517.77 527.62 536.47 526.94 555.85 514.08 555.83 552.93 556.11 570.39 541.58 570.8 541.8 576.66 536.13 576.78 536.23 582.54 530.43 582.63 530.59 588.51 519.13 588.76 519.2 590.45 513.04 589.02 509.25 589.23 505.36 591.8 501.83 592.27 500.56 540.29 500.22 528.27 517.77 527.62 Z" id="Jennings" fill="#cad1f8"/>,
  <path d="M 585.09 277.68 587.08 277.61 586.7 257.65 587.56 257.6 587.15 240.12 607.32 239.48 647.78 237.7 648.26 269.72 648.88 289.93 616.28 290.95 585.56 292.09 585.09 277.68 Z" id="Jay" fill="#f1c1ac"/>,
  <path d="M 529.57 396.8 574.99 395.76 575.88 428.67 576.57 447.96 576.93 462.34 525.66 463.37 524.57 428.93 524.27 414.43 523.95 396.96 529.57 396.8 Z" id="Rush" fill="#a0eaa0"/>,
  <path d="M 328.84 574.4 363.32 574.2 363.47 617.64 363.73 649.54 339.44 649.61 338.4 651.86 334.45 653.59 332.97 655.9 325.87 653.84 325.96 591.73 328.88 591.67 328.84 574.4 Z" id="Martin" fill="#e9dec5"/>,
  <path d="M 530.39 278.62 550.86 278.34 568.04 278.19 585.09 277.68 585.56 292.09 587.2 337.86 558.2 338.52 531.78 338.86 531.25 304.78 530.39 278.62 Z" id="Delaware" fill="#cfdbb3"/>,
  <path d="M 233.46 261.01 282.12 261.41 299.37 261.41 299.6 283.15 293.59 288.33 287.7 289.47 276.29 294.55 275.61 296.47 270.7 300.69 268.4 305.23 258.9 314.17 253.61 315.71 249.49 317.78 246.58 323.06 248.1 326.06 251.37 327.77 251.46 330.69 238.65 330.65 238.66 326.47 232.38 326.5 233.46 261.01 Z" id="Warren" fill="#dbf1e7"/>,
  <path d="M 233.8 209.21 273.04 209.41 298.66 209.45 299.12 244.04 299.37 261.41 282.12 261.41 233.46 261.01 233.8 209.21 Z" id="Benton" fill="#b1d9cd"/>,
  <path d="M 311.78 434.89 312.29 382.72 360.59 382.97 361.86 382.96 361.98 429.65 369.02 429.7 366.75 435.42 366.31 439.84 367.62 445.24 362.05 451.27 362.38 461.6 323.09 461.06 311.58 461.03 311.78 434.89 Z" id="Putnam" fill="#8cd4d9"/>,
  <path d="M 234.15 123.7 246.99 122.37 251.06 124.55 254.16 124.45 256.1 122.52 264.6 119.82 271.95 113.38 271.73 174.57 272.85 174.56 273.04 209.41 233.8 209.21 233.95 185.96 234.15 123.7 Z" id="Newton" fill="#e8e1ac"/>,
  <path d="M 585.56 292.09 616.28 290.95 648.88 289.93 649.36 350.72 636.79 350.78 600.93 352.05 589.48 352.23 587.64 352.3 587.2 337.86 585.56 292.09 Z" id="Randolph" fill="#f5e3cd"/>,
  <path d="M 454.5 60.59 454.63 69.23 454.98 86.98 456.03 121.55 452.49 121.65 441.15 121.89 393.81 122.48 393.5 70.37 393.37 61.71 420.47 61.04 454.5 60.59 Z" id="Marshall" fill="#c8e9c4"/>,
  <path d="M 576.57 447.96 603.28 447.13 617.02 446.96 619.08 447.27 633.56 446.93 651.12 446.99 651.58 490.19 613.44 490.68 603.03 490.27 589.85 490.94 577.82 499.19 577.56 482.54 576.93 462.34 576.57 447.96 Z" id="Franklin" fill="#f1f2cb"/>,
  <path d="M 408.75 243.92 440.59 243.37 486.41 242.24 487.08 273.84 429.06 275.31 429.09 281.13 423.33 281.17 423.29 278.26 418.95 278.3 418.89 269.66 408.75 269.72 408.75 243.92 Z" id="Howard" fill="#c9dfd9"/>,
  <path d="M 299.54 313.39 360.2 313.34 360.21 320.46 360.54 371.43 360.59 382.97 312.29 382.72 299.68 382.62 299.77 365.54 299.6 348.4 299.54 313.39 Z" id="Montgomery" fill="#e0e6ec"/>,
  <path d="M 276.61 503.73 276.92 451.64 282.92 451.8 283.11 434.42 311.78 434.89 311.58 461.03 323.09 461.06 322.73 469.82 322.75 487.21 305.54 487.11 305.41 521.87 276.52 521.12 276.61 503.73 Z" id="Clay" fill="#e4c9a0"/>,
  <path d="M 494.29 641.43 498.48 641.34 498.39 638.56 502.67 632.64 509.49 632.34 537.64 631.84 549.11 631.53 549.19 634.42 551.98 635.57 559.83 635.4 561.91 639.9 560.98 646.02 554.1 650.55 549.24 659.12 545.21 661.3 535.64 662.96 530.66 667.77 528.46 673.92 527.65 680.25 525.16 688.27 520.82 693.99 511.9 699.62 508.73 698.85 506.91 696.17 503.95 695.77 503.37 688.4 505.62 684.79 508.49 683.23 500.98 673.33 501.01 672.59 476.08 673.05 471.68 671.66 471.67 670.18 471.71 656.2 477.52 656.05 477.35 653.46 488.67 653.02 488.64 650.09 491.53 650 491.44 644.29 494.38 644.24 494.29 641.43 Z" id="Clark" fill="#abea9a"/>,
  <path d="M 232.38 326.5 238.66 326.47 238.65 330.65 251.46 330.69 249.76 344.39 247.05 350.8 247.69 361.84 246.19 363.97 249.26 365.55 247.18 368.98 251.57 373.84 255.4 375.23 257.1 377.92 255.85 381.3 259.05 383.06 257.44 387.41 254.5 389.29 254.78 394.98 256.15 397.45 255.22 402.56 255.73 406.67 254.59 412.15 255.02 417.17 253.02 424.08 253.32 428.72 254.83 434.19 231.73 434.22 231.83 381.5 232.38 326.5 Z" id="Vermillion" fill="#ddefea"/>,
  <path d="M 159.39 707.94 188.4 708.54 188.28 713.85 205.81 714.16 205.74 720.65 205.6 729.35 204.36 729.32 203.44 774.53 199.82 775.64 193.66 775.86 189.88 778.66 183.03 778.63 178.73 773.77 176.35 769.7 171.26 768.88 165.9 775.62 166.2 780.18 169.53 783.85 171.23 790.21 170.74 792.23 166.27 794.66 164.72 798.62 162.26 799 159.7 796.03 150.06 791.58 146.55 793.27 143.91 792.56 141.78 790.12 142.49 787.62 146.85 789.05 150.82 788.7 150.8 785.21 146.69 783.81 143.74 777.73 141.17 774.8 142.58 772.42 147.42 775.35 154.06 774.7 153.04 771.1 148.02 770.45 147.6 766.94 151.44 767.65 150.49 762.33 153.01 761.84 154.35 758.33 152.32 752.3 153.76 748.97 151.06 747.35 151.34 743.43 156.27 743.52 161.67 740.47 163.37 736.68 162.8 734.11 155.8 737.06 153.93 734.39 156.86 732.18 160.48 731.91 161.44 727.79 165.21 728.65 167.96 723.84 170.77 720.74 166.09 719.04 161.5 715.64 159.31 712.17 159.39 707.94 Z" id="Posey" fill="#b1dec6"/>,
  <path d="M 360.2 313.34 360.16 269.96 394.62 270 408.75 269.72 418.89 269.66 418.95 278.3 423.29 278.26 423.33 281.17 429.09 281.13 429.43 312.57 429.55 319.56 400.58 320.55 360.21 320.46 360.2 313.34 Z" id="Clinton" fill="#cbe8db"/>,
  <path d="M 417.15 370.82 430.28 370.29 476.81 369.56 476.88 380.98 474.43 381.05 475.22 415.4 475.31 427.12 429.42 428.55 417.64 428.95 416.97 382.35 417.15 370.82 Z" id="Marion" fill="#b0d0de"/>,
  <path d="M 515.05 50.93 529.48 50.41 584.08 48.99 585.52 101.23 568.11 101.61 533.58 101.87 533.61 96.07 516.22 96.46 515.52 68.16 515.05 50.93 Z" id="Noble" fill="#dedfee"/>,
  <path d="M 455.38 485.95 476.05 485.07 499.76 484.19 517.45 483.96 517.39 501.62 517.77 527.62 500.22 528.27 500.56 540.29 496.81 540.11 493.07 542.13 491.04 545.93 456.94 547.32 456.86 544.48 456.98 538.63 456.23 509.43 455.38 485.95 Z" id="Bartholomew" fill="#f1dcdb"/>,
  <path d="M 271.95 113.38 279.41 110.03 280.55 108.73 284.52 104.12 293.74 99.93 295.11 99.91 304.5 103.27 311.83 108.96 318.29 113.19 324.01 109.77 324.02 122.61 324.03 174.39 315.45 174.45 315.62 189.25 298.45 189.32 298.66 209.45 273.04 209.41 272.85 174.56 271.73 174.57 271.95 113.38 Z" id="Jasper" fill="#e9a987"/>,
  <path d="M 475.31 427.12 475.22 415.4 503.5 414.63 524.27 414.43 524.57 428.93 525.66 463.37 525.79 483.8 517.45 483.96 499.76 484.19 476.05 485.07 475.75 467.44 475.87 455.62 475.31 427.12 Z" id="Shelby" fill="#cbdae2"/>,
  <path d="M 240.53 721.43 240.64 714.29 264.19 714.27 264.23 705.45 267.17 705.49 267.14 708.32 277.44 708.49 302.56 708.18 302.55 713.91 311.3 713.95 311.32 730.93 303 730.98 302.23 735.3 299.61 738.93 298.65 742.68 300.13 744.6 294.49 745.75 290.77 742.74 289.48 746.21 289.99 749.8 287.52 750.81 284.78 755.18 278.48 760.12 271.8 769.37 271.61 778.76 263.61 773.26 259.64 772.13 253.26 766.83 248.86 765.41 242.89 766.11 243.17 747.38 239.52 747.37 239.74 730.12 240.53 721.43 Z" id="Warrick" fill="#c4dabe"/>,
  <path d="M 366.75 435.42 396.21 435.37 396.12 429.54 417.64 428.95 429.42 428.55 429.68 486.71 409.6 487.26 396.65 487.65 370.99 487.31 370.99 486.08 370.65 461.53 362.38 461.6 362.05 451.27 367.62 445.24 366.31 439.84 366.75 435.42 Z" id="Morgan" fill="#f7e0c1"/>,
  <path d="M 472.7 156.01 473.79 191.01 474.65 225.37 486 225.07 486.41 242.24 440.59 243.37 439.63 207.34 439.56 182.94 439.26 174.21 439.16 157.02 472.7 156.01 Z" id="Miami" fill="#d2eab4"/>,
  <path d="M 409.6 487.26 429.68 486.71 455.38 485.95 456.23 509.43 456.98 538.63 456.86 544.48 442.54 544.97 419.89 545.13 411.81 545.28 411.9 537.06 411.13 504.95 409.97 504.92 409.6 487.26 Z" id="Brown" fill="#dbdaf1"/>,
  <path d="M 574.99 395.76 587.37 395.34 593.16 395.23 593.22 409.75 616.4 409.39 617.02 446.96 603.28 447.13 576.57 447.96 575.88 428.67 574.99 395.76 Z" id="Fayette" fill="#bed3f0"/>,
  <path d="M 323.09 461.06 362.38 461.6 370.65 461.53 370.99 486.08 368.08 484.38 365.3 489.58 362.51 488.29 363.07 522.2 328.58 521.9 305.41 521.87 305.54 487.11 322.75 487.21 322.73 469.82 323.09 461.06 Z" id="Owen" fill="#bebcdd"/>,
  <path d="M 568.11 101.61 585.52 101.23 611.38 100.18 643.94 98.42 645.86 167.9 634.06 168.58 604.9 169.85 590.81 170.41 565.25 170.85 564.95 153.28 563.82 118.64 568.15 118.53 568.11 101.61 Z" id="Allen" fill="#c0bbdd"/>,
  <path d="M 377.02 209.39 385.61 209.4 385.66 217.97 408.67 217.8 408.75 243.92 408.75 269.72 394.62 270 360.16 269.96 359.94 244.12 348.4 244.12 347.88 223.82 350.3 223.76 349.81 217.06 351.9 213.05 351.84 209.16 377.02 209.39 Z" id="Carroll" fill="#a1b2e8"/>,
  <path d="M 429.42 428.55 475.31 427.12 475.87 455.62 475.75 467.44 476.05 485.07 455.38 485.95 429.68 486.71 429.42 428.55 Z" id="Johnson" fill="#a4d6a4"/>,
  <path d="M 220.24 503.45 276.61 503.73 276.52 521.12 276.39 573.68 276.38 574.93 232.54 574.63 232.01 570.85 234.02 563.96 231.52 560.77 224.22 557.79 225.29 550.55 223.71 546.79 224.91 543.74 220.5 538.91 218.2 538.67 217.84 534.34 212.5 533.8 214.03 529.48 211.62 527.98 215.11 521.47 217.77 520.84 220.33 517.02 222.89 515.38 224.77 511.65 223.87 504.31 220.24 503.45 Z" id="Sullivan" fill="#bad3a2"/>,
  <path d="M 604.18 566.14 604.62 562.45 607.59 564.76 610.13 564.83 612.1 561.67 616.14 560.2 618.66 556.69 624.07 556.07 625.42 552.27 632.21 552.5 633.83 549.84 638.59 547.56 640.86 548.61 643.93 544.9 650.4 553.42 651.63 557.11 650.86 559.41 645.46 565.27 644.19 567.91 645.53 570.76 636.19 571.12 603.59 571.41 604.18 566.14 Z" id="Ohio" fill="#b7d6dc"/>,
  <path d="M 324.03 174.39 359.43 174.32 376.85 174.49 377.12 191.65 377.02 209.39 351.84 209.16 351.9 213.05 349.81 217.06 350.3 223.76 347.88 223.82 348.4 244.12 325.03 244.28 299.12 244.04 298.66 209.45 298.45 189.32 315.62 189.25 315.45 174.45 324.03 174.39 Z" id="White" fill="#c9f6bd"/>,
  <path d="M 429.43 312.57 487.63 311.28 487.61 328.4 488.29 366.13 488.35 369.05 476.81 369.56 430.28 370.29 429.55 319.56 429.43 312.57 Z" id="Hamilton" fill="#a0b8c6"/>,
  <path d="M 249.26 365.55 299.77 365.54 299.68 382.62 312.29 382.72 311.78 434.89 283.11 434.42 254.83 434.19 253.32 428.72 253.02 424.08 255.02 417.17 254.59 412.15 255.73 406.67 255.22 402.56 256.15 397.45 254.78 394.98 254.5 389.29 257.44 387.41 259.05 383.06 255.85 381.3 257.1 377.92 255.4 375.23 251.57 373.84 247.18 368.98 249.26 365.55 Z" id="Parke" fill="#9c97de"/>,
  <path d="M 589.48 352.23 600.93 352.05 636.79 350.78 649.36 350.72 649.83 388.76 650.28 406.21 626.36 406.76 616.36 406.5 616.4 409.39 593.22 409.75 593.16 395.23 587.37 395.34 587.07 378.38 590.11 378.27 589.48 352.23 Z" id="Wayne" fill="#bdf0d8"/>,
  <path d="M 251.46 330.69 251.37 327.77 248.1 326.06 246.58 323.06 249.49 317.78 253.61 315.71 258.9 314.17 268.4 305.23 270.7 300.69 275.61 296.47 276.29 294.55 287.7 289.47 293.59 288.33 299.6 283.15 299.54 313.39 299.6 348.4 299.77 365.54 249.26 365.55 246.19 363.97 247.69 361.84 247.05 350.8 249.76 344.39 251.46 330.69 Z" id="Fountain" fill="#c8b39d"/>,
  <path d="M 487.63 311.28 487.64 293.99 487.13 279.52 530.39 278.62 531.25 304.78 531.78 338.86 532.22 365.03 488.29 366.13 487.61 328.4 487.63 311.28 Z" id="Madison" fill="#e99181"/>,
  <path d="M 472.7 156.01 472.72 147.3 495.32 146.85 512.17 145.97 512.46 154.89 518.4 154.71 520.35 224.27 486 225.07 474.65 225.37 473.79 191.01 472.7 156.01 Z" id="Wabash" fill="#add8ca"/>,
  <path d="M 360.54 371.43 395.3 371.23 417.15 370.82 416.97 382.35 417.64 428.95 396.12 429.54 396.21 435.37 366.75 435.42 369.02 429.7 361.98 429.65 361.86 382.96 360.59 382.97 360.54 371.43 Z" id="Hendricks" fill="#b4cbdf"/>,
  <path d="M 205.74 720.65 240.53 721.43 239.74 730.12 239.52 747.37 243.17 747.38 242.89 766.11 235.65 772.04 233.33 772.97 227.07 769.16 223.8 764.92 223.26 760.71 219.18 759.98 218.53 764.19 214.97 769.72 216.08 772.63 221.37 777.21 220.84 782.44 216.84 787.71 212.02 788.89 207.83 788.23 206.4 782.88 208.78 778.13 208.79 774.96 206.86 773.52 203.44 774.53 204.36 729.32 205.6 729.35 205.74 720.65 Z" id="Vanderburgh" fill="#97e892"/>,
  <path d="M 584.08 48.99 612.13 48.13 642.41 46.84 643.94 98.42 611.38 100.18 585.52 101.23 584.08 48.99 Z" id="DeKalb" fill="#b8adf0"/>,
  <path d="M 642.41 46.84 612.13 48.13 584.08 48.99 582.66 2.51 616.1 1.8 641.03 1 641.43 18.07 642.41 46.84 Z" id="Steuben" fill="#c1ddd3"/>,
  <path d="M 324.02 122.61 393.81 122.48 393.95 174.59 376.85 174.49 359.43 174.32 324.03 174.39 324.02 122.61 Z" id="Pulaski" fill="#bce5f6"/>,
  <path d="M 302.66 652 303.85 654.42 306.94 652.76 310.02 653.45 314.94 652.32 317.95 654.53 320.86 654.23 323.43 655.9 325.87 653.84 332.97 655.9 334.45 653.59 338.4 651.86 339.44 649.61 363.73 649.54 363.99 675.75 364.4 701.97 364.5 704.96 346.71 704.82 346.84 713.57 323.09 714.07 311.3 713.95 302.55 713.91 302.56 708.18 302.66 652 Z" id="Dubois" fill="#a9cfe6"/>,
  <path d="M 465.68 670.34 471.67 670.18 471.68 671.66 476.08 673.05 501.01 672.59 500.98 673.33 508.49 683.23 505.62 684.79 503.37 688.4 503.95 695.77 499.83 696.9 496.93 700.35 496.54 705.44 494.5 709.01 490.16 712.77 487.18 717.39 487 716.33 477.97 716.38 478.24 702.08 475.31 702.05 475.3 699.12 472.36 699.15 471.84 693.57 468.86 693.42 468.78 687.67 465.92 687.67 465.68 670.34 Z" id="Floyd" fill="#d8dfc4"/>,
  <path d="M 384.43 5.38 453.37 4.53 453.89 26.24 454.5 60.59 420.47 61.04 393.37 61.71 393.5 70.37 384.78 70.45 384.64 53.16 387.83 53.16 388.64 50.79 388.59 44.88 390.34 42.98 390.06 27.29 384.21 27.1 384.43 5.38 Z" id="St. Joseph" fill="#efd9d8"/>,
  <path d="M 280.1 32.59 289.16 30.36 289.76 29.13 298.6 27.11 309.24 22.54 323.45 15.58 323.55 33.96 323.94 50.14 323.89 87.83 324.01 109.77 318.29 113.19 311.83 108.96 304.5 103.27 295.11 99.91 293.74 99.93 284.52 104.12 280.55 108.73 280.36 90.54 280.43 55.92 280.1 32.59 Z" id="Porter" fill="#b4c0d6"/>,
  <path d="M 452.49 121.65 456.03 121.55 454.98 86.98 454.63 69.23 485.79 69 515.52 68.16 516.22 96.46 516.49 119.63 511.39 119.74 512.17 145.97 495.32 146.85 472.72 147.3 461.68 147.64 461.61 138.83 452.94 139.18 452.49 121.65 Z" id="Kosciusko" fill="#98bbec"/>,
  <path d="M 476.81 369.56 488.35 369.05 488.29 366.13 532.22 365.03 532.37 379.56 529.32 379.59 529.57 396.8 523.95 396.96 524.27 414.43 503.5 414.63 475.22 415.4 474.43 381.05 476.88 380.98 476.81 369.56 Z" id="Hancock" fill="#bdebce"/>,
  <path d="M 453.37 4.53 493.87 4.28 513.52 3.96 515.05 50.93 515.52 68.16 485.79 69 454.63 69.23 454.5 60.59 453.89 26.24 453.37 4.53 Z" id="Elkhart" fill="#a9ebbd"/>,
  <path d="M 393.95 174.59 393.81 122.48 441.15 121.89 452.49 121.65 452.94 139.18 461.61 138.83 461.68 147.64 472.72 147.3 472.7 156.01 439.16 157.02 439.26 174.21 428.16 174.47 393.95 174.59 Z" id="Fulton" fill="#dce8ca"/>,
  <path d="M 231.73 434.22 254.83 434.19 283.11 434.42 282.92 451.8 276.92 451.64 276.61 503.73 220.24 503.45 219.55 498.02 220.93 496.65 220.02 493.16 222.65 488.65 227.05 487.67 229.36 485.03 231.56 485.86 231.73 434.22 Z" id="Vigo" fill="#baec79"/>,
  <path d="M 593.76 569.5 593.75 566.57 604.18 566.14 603.59 571.41 636.19 571.12 645.53 570.76 656.63 572.6 658.83 574.31 658.62 577.88 653.28 583.02 652.8 587.13 655.34 592.22 651.29 593.89 643.53 592.11 636.48 595.72 627.28 595.73 624.35 598.09 614.95 603.37 610.99 606.26 605.02 611.82 599.39 614.38 594.94 613.86 594.18 592.77 593.76 569.5 Z" id="Switzerland" fill="#afe6f4"/>,
  <path d="M 517.45 483.96 525.79 483.8 525.66 463.37 576.93 462.34 577.56 482.54 577.82 499.19 555.85 514.08 536.47 526.94 517.77 527.62 517.39 501.62 517.45 483.96 Z" id="Decatur" fill="#e8e5d9"/>,
  ]

  

  

  let getColor = (oldColor: string): string => {
    // oldColor: used to map between old rendered values and our new color palette
    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;
    let color = `rgb(${r},${g},${b})`
    return color;
  }

  let counties = new Map<string, County>();

  county_svgs.forEach((svg_elem) => {
    let id = svg_elem.props.id as string | null;
    
    let onClick = (county_id: string, e: Event) => {
      console.log(e);
      let county = counties.get(county_id)
      console.log(county);
      
    }

    if(id != null){
      let county: County = {
        name: id,
        color: getColor(svg_elem.props.fill),
        path: new Path2D(svg_elem.props.d),
        onClick: onClick
      };
    
      counties.set(id, county);
    } 
  })

interface MapViewProps {
  width: number,
  height: number,
  onCountyClick: Function,
  onCategoryClick: Function
};

export const MapView = (props: MapViewProps) => {
  console.log(props);
  
  return <div style={{width: "100%"}}>
    <Canvas canvasWidth={props.width} canvasHeight={props.height} counties={counties} onClick={props.onCountyClick}/>
    <ServiceCategoryPopup onClick={props.onCategoryClick}/>
  </div>
}