<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use setasign\Fpdi\Fpdi;

class FillVoucherController extends Controller
{
    public function process(Request $request)
    {
        // download sample file.
        Storage::disk('local')->put('test.pdf', file_get_contents(storage_path("/app/voucher.pdf")));

        $outputFile = Storage::disk('local')->path('output.pdf');
        // fill data
        $this->fillPDF(Storage::disk('local')->path('test.pdf'), $outputFile);
        //output to browser
        return response()->file($outputFile);
    }

    public function fillPDF($file, $outputFile)
    {
        $fpdi = new FPDI;
        // merger operations
        $count = $fpdi->setSourceFile($file);
        for ($i = 1; $i <= $count; $i++) {
            $template   = $fpdi->importPage($i);
            $size       = $fpdi->getTemplateSize($template);
            $fpdi->AddPage($size['orientation'], array($size['width'], $size['height']));
            $fpdi->useTemplate($template);

            $fpdi->SetFont("helvetica", "", 12);
            $fpdi->SetTextColor(10, 10, 10);
            $fpdi->Text(35, 97, "arjunphp.com");
            $fpdi->Text(35, 107, "arjunphp.com");
            $fpdi->Text(35, 119, "arjunphp.com");
        }
        return $fpdi->Output($outputFile, 'F');
    }
}
