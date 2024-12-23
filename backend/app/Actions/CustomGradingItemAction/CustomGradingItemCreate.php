<?php

namespace App\Actions\CustomGradingItemAction;

use App\Models\CustomGrading;
use App\Models\CustomGradingItem;
use Lorisleiva\Actions\Concerns\AsAction;

class CustomGradingItemCreate
{
    use AsAction;

    protected $customGradingItem;

    public function __construct(CustomGradingItem $customGradingItem) {
        $this->customGradingItem = $customGradingItem;
    }

    public function handle($data)
    {
        return $this->customGradingItem->create($data->all());
    }
}
