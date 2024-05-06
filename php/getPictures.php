<?php
// testing2.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$directoryPath = 'C:\````\Visual Studio Code\Capstone\images\pictures\\';

// Function to get all image file paths in a directory
function getImageFilePaths($directoryPath) {
    $imagePaths = [];
    $files = scandir($directoryPath);
    foreach ($files as $file) {
        $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
        if ($ext === 'jpg') {
            $imagePaths[] = $directoryPath . $file;
        }
    }
    return $imagePaths;
}

// Get image paths
$imagePaths = getImageFilePaths($directoryPath);

// Return image paths as JSON
header('Content-Type: application/json');
echo json_encode($imagePaths);
?>
