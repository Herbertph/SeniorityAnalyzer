package com.herbert.seniorityanalyzer.controller;

import com.herbert.seniorityanalyzer.dto.AnalyzeRequest;
import com.herbert.seniorityanalyzer.dto.AnalyzeResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/analyze")
public class AnalyzeController {

    @PostMapping
    public AnalyzeResponse analyze(@RequestBody AnalyzeRequest request){
        return new AnalyzeResponse(
                0,
                "pending",
                "Analysis not implemented yet"
        );
    }

}
